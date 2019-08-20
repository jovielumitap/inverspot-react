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

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            userType: "national"
        };
    }

    render() {
        const { value, userType } = this.state;

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
                                indicatorColor="primary"
                                textColor="primary"
                                scrollButtons="on"
                            >
                                <Tab className="tab"
                                     icon={<FontAwesomeIcon className="font-size-18" icon="user"/>}/>
                                <Tab className="tab tab-left-border"
                                     icon={<FontAwesomeIcon className="font-size-18" icon="receipt"/>}/>
                                <Tab className="tab tab-left-border"
                                     icon={<FontAwesomeIcon className="font-size-18" icon="map-marker"/>}/>
                                <Tab className="tab tab-left-border"
                                     icon={<FontAwesomeIcon className="font-size-18" icon="piggy-bank"/>}/>
                                <Tab className="tab tab-left-border"
                                     icon={<FontAwesomeIcon className="font-size-18" icon="user-friends"/>}/>
                            </Tabs>
                        </div>
                        <Header title={titles[value]}/>
                        {value === 0 &&
                        <Tab1 userType={userType}/>
                        }
                        {value === 1 &&
                        <Tab2 userType={userType}/>
                        }
                        {value === 2 &&
                        <Tab3 userType={userType}/>
                        }
                        {value === 3 &&
                        <Tab4 userType={userType}/>
                        }
                        {value === 4 &&
                        <Tab5 userType={userType}/>
                        }
                    </Swipeable>

                </div>
            </div>
        );
    }
}

export default ProfilePage;
