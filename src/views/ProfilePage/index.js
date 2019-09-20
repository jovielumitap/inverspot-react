import React, {Component} from "react";
import {Swipeable} from "react-swipeable";
import Tabs from "@material-ui/core/Tabs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Tab from "@material-ui/core/Tab";
import {Header} from "../../components/Header";
import {Tab1} from "./components/Tab1";
import {Tab2} from "./components/Tab2";
import {Tab3} from "./components/Tab3";
import {Tab5} from "./components/Tab5";
import {Tab4} from "./components/Tab4";
import {fetchProfileDetail} from "../../redux/actions";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";

const titles = ["Datos Generales", "Documentos y datos", "Direcció", "Cuenta bancaria", "Beneficiarios"];
class ProfilePage extends Component {
    onSwipeAction = (e) => {
        const deltaX = Math.abs(e.deltaX);
        const {value} = this.state;
        if (deltaX < 100) return false;
        switch (e.dir) {
            case 'Left':
                const v1 = value === 4 ? 0 : value + 1;
                this.setState({value: v1});
                return;
            case 'Right':
                const v = value === 0 ? 4 : value - 1;
                this.setState({value: v});
                return;
            default:
                return;
        }
    };
    handleChange = (event, value) => {
        this.setState({value});
    };
    componentDidMount() {
        this.props.dispatch(fetchProfileDetail());
    }

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    render() {
        const { value } = this.state;
        const { profile, classes } = this.props;
        const {
            tipo_de_persona
        } = profile;
        return (
            <div className="vw-100 d-flex flex-column">
                <div className="d-flex flex-column p-0 m-0">
                    <Swipeable className="d-flex flex-column"
                               onSwipedLeft={(eventData) => this.onSwipeAction(eventData)}
                               onSwipedRight={(eventData) => this.onSwipeAction(eventData)}>
                        <div className="tabs-container">
                            <Tabs
                                value={value}
                                onChange={this.handleChange}
                                variant="fullWidth"
                                classes={{
                                    indicator: classes.indicator
                                }}
                                scrollButtons="on"
                            >
                                <Tab className="tab"
                                     style={{color: value === 0 ? "#662D91" : "#CCCCCC"}}
                                     icon={<FontAwesomeIcon className="font-size-18" icon="user"/>}/>
                                <Tab className="tab tab-left-border"
                                     style={{color: value === 1 ? "#662D91" : "#CCCCCC"}}
                                     icon={<FontAwesomeIcon className="font-size-18" icon="receipt"/>}/>
                                <Tab className="tab tab-left-border"
                                     style={{color: value === 2 ? "#662D91" : "#CCCCCC"}}
                                     icon={<FontAwesomeIcon className="font-size-18" icon="map-marker"/>}/>
                                <Tab className="tab tab-left-border"
                                     style={{color: value === 3 ? "#662D91" : "#CCCCCC"}}
                                     icon={<FontAwesomeIcon className="font-size-18" icon="piggy-bank"/>}/>
                                <Tab className="tab tab-left-border"
                                     style={{color: value === 4 ? "#662D91" : "#CCCCCC"}}
                                     icon={<FontAwesomeIcon className="font-size-18" icon="user-friends"/>}/>
                            </Tabs>
                        </div>
                        <Header title={titles[value]}/>
                        {value === 0 &&
                        <Tab1 userType={tipo_de_persona} profile={profile}/>
                        }
                        {value === 1 &&
                        <Tab2 userType={tipo_de_persona} profile={profile}/>
                        }
                        {value === 2 &&
                        <Tab3 userType={tipo_de_persona} profile={profile}/>
                        }
                        {value === 3 &&
                        <Tab4 userType={tipo_de_persona} profile={profile}/>
                        }
                        {value === 4 &&
                        <Tab5 userType={tipo_de_persona} profile={profile}/>
                        }
                    </Swipeable>

                </div>
            </div>
        );
    }
}
const mapStateToProps = ({ profileReducer }) => {
    const { profile } = profileReducer;
    return { profile }
};
const styles = theme => ({
    indicator: {
        backgroundColor: '#662D91',
    },
});
export default connect(mapStateToProps)(withStyles(styles)(ProfilePage));
