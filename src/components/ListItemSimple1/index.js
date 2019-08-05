import React, { Component } from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

class ListItemSimple1 extends Component {
    render() {
        const {client, onClickItem} = this.props;
        return (
            <ListItem button onClick={onClickItem}>
                <Avatar className="size-30" style={{backgroundColor: client.colorIcon1}}><span className="m-0 text-white">{client['Icon/letter1']}</span></Avatar>
                <ListItemText className="br-break" primary={client.label1} />
            </ListItem>
        )
    }
}
export default ListItemSimple1;