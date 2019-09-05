import React, {Component} from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Menu from "@material-ui/core/Menu";
export default class SocialDropDownMenu extends Component {
    render() {
        const { anchorEl, open, onClose } = this.props;
        return (
            <Menu id="long-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={onClose}
                  MenuListProps={{
                      style: {
                          width: 45
                      }
                  }}>
                <MenuItem>
                    <FontAwesomeIcon icon="phone"/>
                </MenuItem>
                <MenuItem>
                    <FontAwesomeIcon icon={['fab', 'whatsapp']}/>
                </MenuItem>
                <MenuItem>
                    <FontAwesomeIcon icon="envelope"/>
                </MenuItem>
                <MenuItem>
                    <FontAwesomeIcon icon="map-marker"/>
                </MenuItem>
            </Menu>
        )
    }
}
