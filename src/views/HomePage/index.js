import React, {Component} from "react";
import {connect} from "react-redux";
import {Card} from "@material-ui/core";

class HomePage extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="container">
                <div>
                    <Card>
                        <div>
                            First Item
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({opportunity}) => {
    const {opportunities} = opportunity;
    return {
        opportunities
    }
};
export default connect(mapStateToProps)(HomePage);
