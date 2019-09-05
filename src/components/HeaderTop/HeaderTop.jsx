import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core';
import styles from './styles'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import SocialDropDownMenu from "../SocialDropDownMenu";

class HeaderTop extends Component {
    state = {
        anchorEl: undefined,
        menuState: false
    };
    onMenuOptionSelect = event => {
        this.setState({menuState: true, anchorEl: event.currentTarget});
    };
    handleRequestClose = () => {
        this.setState({menuState: false});
    };
    render() {
        const {
            classes,
            history,
            title
        } = this.props;
        const {anchorEl, menuState} = this.state;
        return (
            <div
                className="top-header-container w-100 d-flex align-items-center px-2"
            >
                <IconButton
                    color="inherit"
                    onClick={() => history.goBack()}
                    className={classes.menuButton}
                >
                    <FontAwesomeIcon icon="chevron-left"/>
                </IconButton>
                <div className="font-size-20 font-weight-bold w-100 text-ellipsis"><span>{title}</span></div>
                <div className="d-flex float-right">
                    <IconButton
                        color="inherit"
                        onClick={this.onMenuOptionSelect}
                    >
                        <FontAwesomeIcon icon="ellipsis-v"/>
                    </IconButton>

                    <SocialDropDownMenu
                        anchorEl={anchorEl}
                        open={menuState}
                        onClose={this.handleRequestClose}
                    />
                </div>
            </div>
        )
    }
}
export default withStyles(styles, {withTheme: true})(HeaderTop);
