import React, {Component} from "react";
import {ArrowBack} from "@material-ui/icons";
import {connect} from "react-redux";
import IconButton from "@material-ui/core/IconButton";

class HeaderOverView extends Component {
    render() {
        const { opportunityDetail } = this.props;
        return (
            <div className="position-relative w-100" style={{height: '25vh'}}>
                <img
                    className="w-100 opportunity-investment-detail-img-bg"
                    alt={""}
                    style={{height: '25vh'}}
                    src={opportunityDetail.images && opportunityDetail.images[0]?opportunityDetail.images[0]: ""}
                />
                <div className="opportunity-investment-detail-header-back">
                    <IconButton
                        color="inherit"
                        onClick={() => this.props.history.goBack()}
                    >
                        <ArrowBack className="font-white font-size-30" />
                    </IconButton>
                </div>
                <div className="opportunity-investment-detail-header-gradient">
                    <div className="opportunity-investment-detail-header-overview px-2">
                        <div className="detail-name">{opportunityDetail.productname}</div>
                        <div className="w-100 d-flex">
                            <div className="f-1">
                                <div className="text-white">Inresión</div>
                                <div className="detail-info">{opportunityDetail.unit_price_in_ks}</div>
                            </div>
                            <div className="f-1">
                                <div className="text-white">Rendimiento</div>
                                <div className="detail-info">{opportunityDetail.cf_1402}%</div>
                            </div>
                            <div className="f-1">
                                <div className="text-white">Plazo</div>
                                <div className="detail-info">{opportunityDetail.cf_1400}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(HeaderOverView);
