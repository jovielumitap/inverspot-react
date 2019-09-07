import React, {Component} from "react";
import {Swipeable} from "react-swipeable";
import Tabs from "@material-ui/core/Tabs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Tab from "@material-ui/core/Tab";
import {Tab1} from "../components/Tab1";
import {Tab2} from "../components/Tab2";
import {Tab3} from "../components/Tab3";
import {Tab4} from "../components/Tab4";
import {Tab5} from "../components/Tab5";
import {Tab6} from "../components/Tab6";
import {Tab7} from "../components/Tab7";
import HeaderTop from "../../../components/HeaderTop";
import {fetchParticipationDetail, requestDownloadPDFInvoice} from "../../../redux/actions";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core";
import DownloadConfirmDialog from "../../../components/DownloadConfirmDialog";
import HeaderOverView from "../../../components/HeaderOverView";
import InvestmentDetailDialog from "../../../components/InvestmentDetailDialog";

class InvestmentDetail extends Component {
    componentDidMount() {
        this.props.dispatch(fetchParticipationDetail("199398"))
    }
    onSwipeAction = (e) => {
        const deltaX = Math.abs(e.deltaX);
        const {value} = this.state;
        if (deltaX < 100) return false;
        switch (e.dir) {
            case 'Left':
                const v1 = value === 6 ? 0 : value + 1;
                this.setState({value: v1});
                return;
            case 'Right':
                const v = value === 0 ? 6 : value - 1;
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
    onHandleDownloadModal = () => {
        this.setState((state) => {
            return {
                open_download: !state.open_download
            }
        })
    };
    confirmDownload = () => {
        this.setState({open_download: false});
        if (!this.state.pdfId) return;
        this.props.dispatch(requestDownloadPDFInvoice(this.state.pdfId));
    };
    requestDownloadPDF = (id) => {
        this.setState({open_download: true, pdfId: id});
    };
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            open: false,
            open_download: false,
            pdfId: null
        };
    }

    render() {
        const {value, open, open_download } = this.state;
        const { history, classes, participationDetail } = this.props;
        if (!participationDetail) {
            return (
                <div className="h-100 d-flex align-items-center justify-content-center">
                    {"No found data"}
                </div>
            );
        }
        const proyecto = participationDetail.proyecto;
        const orders = participationDetail.orders;
        const listprice = participationDetail.listprice;
        const rendest = participationDetail.rendest;
        return (
            <div className="vw-100 d-flex flex-column pb-4">
                <HeaderTop history={history} title={proyecto.productname}/>
                <HeaderOverView
                    image={proyecto.images && proyecto.images[0]?proyecto.images[0]: ""}
                    row1={parseFloat(listprice? listprice: 0)}
                    row2={rendest? rendest: "0"}
                    row3={proyecto.cf_1402? proyecto.cf_1402: "0"}
                    row4={null}
                    row5={null}
                    row6={null}
                    imageFloatButton={true}
                    imageFloatButtonIcon={"file-invoice-dollar"}
                    onHandleModal={this.onHandleModal}
                />
                <div className="d-flex flex-column p-0 mb-4">

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
                                <Tab className="tab tab-left-border" style={{color: value === 1 ? "#662D91" : "#CCCCCC"}}
                                     icon={<FontAwesomeIcon className="font-size-18" icon="chart-line"/>}/>
                                <Tab className="tab tab-left-border" style={{color: value === 2 ? "#662D91" : "#CCCCCC"}}
                                     icon={<FontAwesomeIcon className="font-size-18" icon="hard-hat"/>}/>
                                <Tab className="tab tab-left-border" style={{color: value === 3 ? "#662D91" : "#CCCCCC"}}
                                     icon={<FontAwesomeIcon className="font-size-18" icon="file-signature"/>}/>
                                <Tab className="tab tab-left-border" style={{color: value === 4 ? "#662D91" : "#CCCCCC"}}
                                     icon={<FontAwesomeIcon className="font-size-18" icon="receipt"/>}/>
                                <Tab className="tab tab-left-border" style={{color: value === 5 ? "#662D91" : "#CCCCCC"}}
                                     icon={<FontAwesomeIcon className="font-size-18" icon="piggy-bank"/>}/>
                                <Tab className="tab tab-left-border" style={{color: value === 6 ? "#662D91" : "#CCCCCC"}}
                                     icon={<FontAwesomeIcon className="font-size-18" icon="hand-holding-usd"/>}/>
                            </Tabs>
                        </div>
                        {value === 0 &&
                            <Tab1 data={proyecto} rendest={rendest} onHandleModal={this.onHandleModal}/>
                        }
                        {value === 1 &&
                            <Tab2 data={proyecto} listprice={listprice} rendest={rendest}/>
                        }
                        {value === 2 &&
                            <Tab3 data={proyecto}/>
                        }
                        {value === 3 &&
                            <Tab4 data={orders} requestDownloadPDF={this.requestDownloadPDF}/>
                        }
                        {value === 4 &&
                            <Tab5/>
                        }
                        {value === 5 &&
                            <Tab6/>
                        }
                        {value === 6 &&
                            <Tab7/>
                        }
                    </Swipeable>
                </div>
                {open && (
                    <InvestmentDetailDialog
                        open={open}
                        onHandleModal={this.onHandleModal}
                    />
                )}
                {open_download && (
                    <DownloadConfirmDialog
                        open={open_download}
                        onHandleModal={this.onHandleDownloadModal}
                        confirmDownload={this.confirmDownload}
                    />
                )}
            </div>
        );
    }
}
const styles = theme => ({
    indicator: {
        backgroundColor: '#662D91',
    },
});
const mapStateToProps = ({participation}) => {
    const { participationDetail } = participation;
    return {
        participationDetail
    }
};
export default connect(mapStateToProps)(withStyles(styles)(InvestmentDetail));
