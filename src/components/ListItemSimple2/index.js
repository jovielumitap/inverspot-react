import React, { Component } from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCar, faBuilding } from '@fortawesome/free-solid-svg-icons'
class ListItemSimple2 extends Component {
    getFaIcon = (name) => {
        switch (name) {
            case 'user':
                return faUser;
            case 'building':
                return faBuilding;
            case 'car':
                return faCar;
            default:
                return;
        }
    }
    render() {
        const { option } = this.props;
        return (
            <ListItem button key={option.id}>
                <div className="font-size-20"><FontAwesomeIcon icon={this.getFaIcon(option.icon)} fixedWidth /></div>
                <ListItemText className="br-break" primary={option.name} />
            </ListItem>
        )
    }
}
export default ListItemSimple2;