import React, {Component} from "react";
import SubHeader from "../components/SubHeader";
import {Swipeable} from "react-swipeable";
import Tabs from "@material-ui/core/Tabs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Tab from "@material-ui/core/Tab";
import HeaderOverView from "../components/HeaderOverView";
import {Tab1} from "../components/Tab1";
import {Tab2} from "../components/Tab2";
import {Tab3} from "../components/Tab3";
import {connect} from "react-redux";
import {fetchOpportunityDetail} from "../../../redux/actions";

class OpportunityInvestmentDetail extends Component {
    componentDidMount() {
        this.props.dispatch(fetchOpportunityDetail(this.props.match.params.id))
    }

    onSwipeAction = (e) => {
        const deltaX = Math.abs(e.deltaX);
        const {value} = this.state;
        if (deltaX < 100) return false;
        switch (e.dir) {
            case 'Left':
                const v1 = value === 2 ? 0 : value + 1;
                this.setState({value: v1});
                return;
            case 'Right':
                const v = value === 0 ? 2 : value - 1;
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
            value: 0
        };
    }

    render() {
        const {value} = this.state;
        const { history, opportunityDetail } = this.props;

        return (
            <div className="vw-100 d-flex flex-column">
                <HeaderOverView history={history} opportunityDetail={opportunityDetail}/>
                <div className="d-flex flex-column p-0 m-0">
                    <SubHeader history={history}/>

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
                                     icon={<FontAwesomeIcon className="font-size-18" icon="info-circle"/>}/>
                                <Tab className="tab tab-left-border"
                                     icon={<FontAwesomeIcon className="font-size-18" icon="chart-line"/>}/>
                                <Tab className="tab tab-left-border"
                                     icon={<FontAwesomeIcon className="font-size-18" icon="hard-hat"/>}/>
                            </Tabs>
                        </div>
                        {value === 0 &&
                            <Tab1/>
                        }
                        {value === 1 &&
                            <Tab2/>
                        }
                        {value === 2 &&
                            <Tab3/>
                        }
                    </Swipeable>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ opportunity }) => {
    const { opportunityDetail } = opportunity;
    return {
        opportunityDetail
    }
};
export default connect(mapStateToProps)(OpportunityInvestmentDetail);
