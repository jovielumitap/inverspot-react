import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import {Swipeable} from "react-swipeable";
import Tabs from "@material-ui/core/Tabs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Tab from "@material-ui/core/Tab";
import HeaderOverView from "../../../components/HeaderOverView";
import {Tab1} from "../components/Tab1";
import {Tab2} from "../components/Tab2";
import {Tab3} from "../components/Tab3";
import {connect} from "react-redux";
import {fetchOpportunityDetail, submitApartarRequest} from "../../../redux/actions";
import HeaderTop from "../../../components/HeaderTop";
import PutInvestmentDialog from "../../../components/PutInvestmentDialog";

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

    onHandleModal = () => {
        this.setState((state) => {
            return {
                open: !state.open
            }
        })
    };
    onSubmitForm = (quantity) => {
        this.setState({open: false});
        this.props.dispatch(submitApartarRequest(this.props.match.params.id, quantity))
    };
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            open: false
        };
    }

    render() {
        const {value, open } = this.state;
        const {history, opportunityDetail, classes} = this.props;
        return (
            <div className="vw-100 d-flex flex-column">
                <HeaderTop history={history} title={opportunityDetail.productname}/>
                <HeaderOverView
                    image={opportunityDetail.images && opportunityDetail.images[0]?opportunityDetail.images[0]: ""}
                    row1={parseFloat(opportunityDetail.unit_price? opportunityDetail.unit_price: 0)}
                    row2={opportunityDetail.cf_1402? opportunityDetail.cf_1402: "0"}
                    row3={opportunityDetail.cf_1400? opportunityDetail.cf_1400: ""}
                    row4={null}
                    row5={null}
                    row6={null}
                    imageFloatButton={true}
                    imageFloatButtonIcon={"plus"}
                    onHandleModal={this.onHandleModal}
                />
                <div className="d-flex flex-column p-0" style={{marginBottom: "50px"}}>

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
                                <Tab className="tab" style={{color: value === 0 ? "#662D91" : "#CCCCCC"}}
                                     icon={<FontAwesomeIcon className="font-size-18" icon="info-circle"/>}/>
                                <Tab className="tab tab-left-border"
                                     style={{color: value === 1 ? "#662D91" : "#CCCCCC"}}
                                     icon={<FontAwesomeIcon className="font-size-18" icon="chart-line"/>}/>
                                <Tab className="tab tab-left-border"
                                     style={{color: value === 2 ? "#662D91" : "#CCCCCC"}}
                                     icon={<FontAwesomeIcon className="font-size-18" icon="hard-hat"/>}/>
                            </Tabs>
                        </div>
                        {value === 0 &&
                        <Tab1 data={opportunityDetail}
                              onHandleModal={this.onHandleModal}
                        />
                        }
                        {value === 1 &&
                        <Tab2 data={opportunityDetail}/>
                        }
                        {value === 2 &&
                        <Tab3 data={opportunityDetail}/>
                        }
                    </Swipeable>
                </div>
                {open && (
                    <PutInvestmentDialog
                        open={open}
                        image={opportunityDetail.images && opportunityDetail.images[0] ? opportunityDetail.images[0] : ""}
                        title={opportunityDetail.productname}
                        onHandleModal={this.onHandleModal}
                        onSubmitForm={this.onSubmitForm}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = ({opportunity}) => {
    const {opportunityDetail} = opportunity;
    return {
        opportunityDetail
    }
};
const styles = theme => ({
    indicator: {
        backgroundColor: '#662D91',
    },
});

export default connect(mapStateToProps)(withStyles(styles)(OpportunityInvestmentDetail));
