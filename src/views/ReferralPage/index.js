import React, {Component} from "react";
import {connect} from "react-redux";
import {Header} from "../../components/Header";
import {Swipeable} from "react-swipeable";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Tab1} from "./components/Tab1";
import {Tab2} from "./components/Tab2";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
class ReferralPage extends Component {
    onSwipeAction = (e) => {
        const deltaX = Math.abs(e.deltaX);
        const {value} = this.state;
        if (deltaX < 100) return false;
        switch (e.dir) {
            case 'Left':
                const v1 = value === 1 ? 0 : value + 1;
                this.setState({value: v1});
                return;
            case 'Right':
                const v = value === 0 ? 1 : value - 1;
                this.setState({value: v});
                return;
            default:
                return;
        }
    };
    onClickItem = () => {
        console.log("click item")
    };
    handleChange = (event, value) => {
        this.setState({value});
    };
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }
    render() {
        const {value} = this.state;
        const {history} = this.props;
        return (
            <div className="vw-100">
                <Header title={'Mis documentos'}/>
                <div className="p-3">
                    <div className="font-size-16 font-weight-600">
                        Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                        Ut wisi enim ad minim veniamtation
                    </div>
                    <div className="w-100 d-flex justify-content-center my-3">
                        <div className="social-item mx-2">
                            <div className="align-center position-absolute font-white">
                                <FontAwesomeIcon className="font-size-20" icon={['fas', 'envelope']}/>
                            </div>
                        </div>

                        <div className="social-item mx-2">
                            <div className="align-center position-absolute font-white">
                                <FontAwesomeIcon className="font-size-20" icon={['fab', 'facebook-f']} />
                            </div>
                        </div>

                        <div className="social-item mx-2">
                            <div className="align-center position-absolute font-white">
                                <FontAwesomeIcon className="font-size-20" icon={['fab', 'whatsapp']}/>
                            </div>
                        </div>

                        <div className="social-item mx-2">
                            <div className="align-center position-absolute font-white">
                                <FontAwesomeIcon className="font-size-20" icon={['fab', 'twitter']}/>
                            </div>
                        </div>
                    </div>

                    <div className="font-size-20 font-weight-600 text-center">
                        Compate el siguiente enlace
                    </div>

                    <div className="w-100 d-flex justify-content-center my-3">
                        <div className="following-link mx-2 d-table">
                            <div className="d-table-cell following-link-text px-4">
                                https://goo.gl
                            </div>
                        </div>

                        <div className="copy-item mx-2">
                            <div className="align-center position-absolute font-white">
                                <FontAwesomeIcon className="font-size-20" icon={'copy'} />
                            </div>
                        </div>
                    </div>
                </div>
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
                            >
                                <Tab className="tab f-1"
                                     icon={<FontAwesomeIcon className="font-size-18" icon={'user-friends'}/>}
                                     label="Mis referidos"
                                />
                                <Tab className="tab f-1 tab-left-border"
                                     icon={<FontAwesomeIcon className="font-size-18" icon={'hand-holding-usd'}/>}
                                     label="Mis comisiones"
                                />
                            </Tabs>
                        </div>
                        {value === 0 &&
                        <Tab1/>
                        }
                        {value === 1 &&
                        <Tab2/>
                        }
                    </Swipeable>
                </div>
            </div>
        )
    }
}

export default connect()(ReferralPage);
