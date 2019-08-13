import React, {Component} from "react";
import List from "@material-ui/core/List";
import ParticipationItem from "./components/ParticipationItem";
import {connect} from "react-redux";
const investments = [
    {name: "Contadero 403", date: "11-17", amount: "100k", percent: "30-33%"},
    {name: "Not found 404", date: "11-17", amount: "100k", percent: "35-40%"},
    {name: "Contadero 405", date: "11-17", amount: "100k", percent: "17-22%"},
    {name: "Contadero 406", date: "11-17", amount: "100k", percent: "10-15%"},
    {name: "Contadero 407", date: "11-17", amount: "100k", percent: "18-20%"},
];
class Index extends Component {
    onClickItem = () => {
        this.props.history.push("participation/detail")
    };
    render() {
        return (
            <div className="container">
                <List>
                    {investments.map((investment, index) =>
                        <ParticipationItem key={"investment" + index} item={investment} onClick={this.onClickItem}/>
                    )}
                </List>
            </div>
        )
    }
}

export default connect()(Index);