import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class GoogleMapsScript extends PureComponent {
  static propTypes = {
    apiKey: PropTypes.string.isRequired,
    onLoad: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.id = 'GoogleMapsScript';
  }

  /*
    when the component did mount verify if exist the googlemaps script
    if it not exist, add the tag in the body and add a global function 'mapsCallback'
    this will be executed when google maps is loaded
  */
  componentDidMount() {
    const { onLoad } = this.props;
    if (!this.verifyIfExist()) {
      this.insertTagInTheBody();
      window.mapsCallback = function mapsCallback() {
        /* do onLoad callback */
        onLoad();
      };
    }

    else {
      /* do onLoad callback */
      onLoad();
    }
  }

  /*
    check if exist the googlemaps script
    @return Node
  */
  verifyIfExist = () => {
    const script = document.getElementById(this.id);
    return Boolean(script);
  }

  /*
    create googlemaps script tag
    @return bool
  */
  createTag = () => {
    const { apiKey } = this.props;
    const script = document.createElement('script');
    script.id = this.id;
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=mapsCallback`;
    return script;
  }

  /*
    inset the script in the html body
    @return bool
  */
  insertTagInTheBody = () => {
    const script = this.createTag();
    document.body.appendChild(script);
  }

  /* Fake render */
  render() {
    return (
      <>
      </>
    );
  }
}
