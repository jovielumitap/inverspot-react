import React, {Component} from "react";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class HeaderOverView extends Component {
    render() {
        const {
            image,
            row1,
            row2,
            row3,
            row4,
            row5,
            row6,
            imageFloatButton,
            imageFloatButtonIcon
        } = this.props;
        return (
            <div className="w-100">
                <div className="w-100 position-relative text-center">
                    {image && (
                        <img
                            className="opportunity-investment-detail-img-bg"
                            alt={""}
                            src={image}
                        />
                    )}
                    {image && imageFloatButton && (
                        <div className="plus-float-button d-table"
                             onClick={() => this.props.onHandleModal()}
                        >
                            <div className="d-table-cell vertical-align-center">
                                <FontAwesomeIcon icon={imageFloatButtonIcon}/>
                            </div>
                        </div>
                    )}
                </div>
                <div className="opportunity-investment-detail-header-gradient">
                    <div className="opportunity-investment-detail-header-overview px-2">
                        <div className="row d-flex mx-0">
                            <div className="col-4 px-0">
                                <div className="detail-info pl-4">${row1}</div>
                                <div className="text-black-50 pl-4">Inresión</div>
                            </div>
                            <div className="col-4 px-0">
                                <div className="detail-info pl-4">{row2}%</div>
                                <div className="text-black-50 pl-4">Rendimiento</div>
                            </div>
                            <div className="col-4 px-0">
                                <div className="detail-info pl-4">{row3}</div>
                                <div className="text-black-50 pl-4">Plazo</div>
                            </div>
                            {row4 && (
                                <div className="col-4 px-0">
                                    <div className="detail-info pl-4">{row4}</div>
                                    <div className="text-black-50 pl-4">Avance de la obra</div>
                                </div>
                            )}
                            {row5 && (
                                <div className="col-4 px-0">
                                    <div className="detail-info pl-4">{row5}%</div>
                                    <div className="text-black-50 pl-4">Participaciones</div>
                                </div>
                            )}
                            { row6 && (
                                <div className="col-4 px-0">
                                    <div className="detail-info pl-4">{row6}</div>
                                    <div className="text-black-50 pl-4">Inicio</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(HeaderOverView);
