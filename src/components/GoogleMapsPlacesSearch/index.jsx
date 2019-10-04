import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapsScript from './components/GoogleMapsScript';
import GoogleMapsSearchBox from './components/GoogleMapsSearchBox';
import GoogleMapsMap from './components/GoogleMapsMap';

import './GoogleMapsPlacesSearch.css';

export default class GoogleMapsPlacesSearch extends Component {
  static propTypes = {
    id: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
    onPlacesChanged: PropTypes.func, /* return Object */
    displayMap: PropTypes.bool,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
    geolocation: PropTypes.bool,
    getCurrentPosition: PropTypes.func, /* return Object or False */
    typeSearch: PropTypes.string,
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    id: 'key_search_box',
    onPlacesChanged: () => {},
    displayMap: false,
    latitude: 0,
    longitude: 0,
    zoom: 1,
    geolocation: false,
    getCurrentPosition: () => {},
    typeSearch: '(regions)',
    placeholder: 'País de Nacimiento',
  }

  constructor(props) {
    super(props);
    this.searchBox = null;
    this.map = null;
  }

  /*
    set reference for the search box
  */
  setSearchBoxRef = (node) => {
    if (!this.searchBox) {
      this.searchBox = node;
    }
  }

  /*
    set reference for the map
  */
  setMapRef = (node) => {
    if (!this.map) {
      this.map = node;
    }
  }

  /*
    check if the map is displayed
    @return bool
  */
  IsMapDisplayed = () => {
    const { displayMap } = this.props;
    return displayMap;
  }

  /*
    Add a Marker in the map
    @param float latitude
    @param float longitude
  */
  setMarker = (latitude, longitude) => {
    if (this.IsMapDisplayed()) {
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(latitude, longitude),
      });
      marker.setMap(this.map);
    }
  }

  /*
    check if the map is displayed and set new a options in the map
    @param float latitude
    @param float longitude
    @param int zoom
  */
  changeMapOptions = (latitude, longitude, zoom = 17) => {
    if (this.IsMapDisplayed()) {
      const options = {
        zoom,
        center: new window.google.maps.LatLng(latitude, longitude),
      };
      this.map.setOptions(options);
    }
  }

  /*
    check if the geolocation is enabled and get the current user position
  */
  getGeolocation = () => {
    const { geolocation, getCurrentPosition } = this.props;
    if (geolocation) {
      if ('geolocation' in window.navigator) {
        window.navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          /* do getCurrentPosition callback */
          getCurrentPosition(position);
          this.setMarker(latitude, longitude);
          this.changeMapOptions(latitude, longitude);
        });
      }

      else {
        getCurrentPosition(false);
      }
    }
  }

  /*
    Generate a search box and add places changed event
  */
  makeGoogleSeachBox = () => {
    const { onPlacesChanged, typeSearch } = this.props;
    const options = {
      types: [typeSearch],
    };
    const searchBox = new window.google.maps.places.SearchBox(this.searchBox, options);
    /* do onPlacesChanged callback */
    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      onPlacesChanged(places);
      if (this.IsMapDisplayed()) {
        const place = places[0];
        if ('geometry' in place) {
          const latitude = place.geometry.location.lat();
          const longitude = place.geometry.location.lng();
          this.setMarker(latitude, longitude);
        }
      }
    });
  }

  /*
    if the map is displayed, generate a map
  */
  makeGoogleMap = () => {
    if (this.IsMapDisplayed()) {
      const { latitude, longitude, zoom } = this.props;
      this.map = new window.google.maps.Map(this.map);
      this.changeMapOptions(latitude, longitude, zoom);
    }
  }

  /*
    When google maps is loaded call this function
  */
  handleOnLoad = () => {
    this.makeGoogleSeachBox();
    this.makeGoogleMap();
    this.getGeolocation();
  }

  render() {
    const {
      id,
      apiKey,
      displayMap,
      placeholder,
    } = this.props;

    return (
      <>
        <div className="google-maps-places-search">
          {
            displayMap
              ? (
                <div className="google-maps-places-search__warapper">
                  <GoogleMapsMap setRef={this.setMapRef} />
                  <div>
                    <GoogleMapsSearchBox setRef={this.setSearchBoxRef} />
                  </div>
                </div>
              )
              : (
                <GoogleMapsSearchBox
                  id={id}
                  placeholder={placeholder}
                  setRef={this.setSearchBoxRef}
                />
              )
          }
        </div>
        <GoogleMapsScript
          apiKey={apiKey}
          onLoad={this.handleOnLoad}
        />
      </>
    );
  }
}
