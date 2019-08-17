import React, { Component } from "react";

class SelectUserType extends Component{

    render() {
        const { title, onClick } = this.props;
        return (
            <div>
                <div className="w-100 text-center register-title mt-4 mb-2">
                    {title}
                </div>
                <div className="w-100">
                    <div className="w-50 purple-button mx-auto mb-2"
                         onClick={() => onClick(0)}
                    >
                        Nacional Fisica
                    </div>
                    <div className="w-50 purple-button mx-auto mb-2"
                         onClick={() => onClick(1)}
                    >
                        Extranjera Fisica
                    </div>
                    <div className="w-50 purple-button mx-auto mb-2"
                         onClick={() => onClick(2)}
                    >
                        Nacional Moral
                    </div>
                    <div className="w-50 purple-button mx-auto mb-2"
                         onClick={() => onClick(3)}
                    >
                        Extranjera Moral
                    </div>
                </div>
            </div>
        )
    }
}
export default SelectUserType;
