import React, {Component} from "react";
import {ArrowBack} from "@material-ui/icons";
import {connect} from "react-redux";
import IconButton from "@material-ui/core/IconButton";

class HeaderOverView extends Component {
    render() {
        return (
            <div className="position-relative w-100 h-25">
                <img
                    className="w-100 opportunity-investment-detail-img-bg"
                    alt={""}
                    style={{height: '25vh'}}
                    src={"https://rismedia.com/wp-content/uploads/2018/12/stock_market_509614932-1080x627.jpg"}
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
                    <div className="participation-detail-header-overview px-2">
                        <div className="detail-name">Contadero 403</div>
                        <div className="row d-flex mx-0">
                            <div className="col-3 px-0">
                                <div className="text-white font-size-12">Avance de la obra</div>
                                <div className="detail-info">Obra gris</div>
                            </div>
                            <div className="col-3 px-0">
                                <div className="text-white font-size-12">Rendimiento</div>
                                <div className="detail-info">33-45%</div>
                            </div>
                            <div className="col-3 px-0">
                                <div className="text-white font-size-12">Plazo</div>
                                <div className="detail-info">11-14</div>
                            </div>
                            <div className="col-3 px-0">
                                <div className="text-white font-size-12">Inicio</div>
                                <div className="detail-info">15/06/2019</div>
                            </div>
                            <div className="col-3 px-0">
                                <div className="text-white font-size-12">Participaciones</div>
                                <div className="detail-info">2</div>
                            </div>
                            <div className="col-3 px-0">
                                <div className="text-white font-size-12">Por invertir</div>
                                <div className="detail-info">$100,000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(HeaderOverView);
