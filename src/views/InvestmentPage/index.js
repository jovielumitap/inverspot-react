import React, {Component} from "react";
import List from "@material-ui/core/List";
import InvestmentItem from "./components/InvestmentItem";
import {connect} from "react-redux";
import { fetchInvestmentList } from "../../redux/actions";
const investments = [
    {name: "Contadero 403", date: "11-17", amount: "100k", percent: "3"},
    {name: "Not found 404", date: "11-17", amount: "100k", percent: "2"},
    {name: "Contadero 405", date: "11-17", amount: "100k", percent: "5"},
    {name: "Contadero 406", date: "11-17", amount: "100k", percent: "7"},
    {name: "Contadero 407", date: "11-17", amount: "100k", percent: "4"},
];
class InvestmentPage extends Component {componentDidMount() {
    this.props.dispatch(fetchInvestmentList())
}

    onClickItem = (id) => {
        this.props.history.push(`investment/${id}`)
    };
    render() {
        //const { investments } = this.props;
        return (
            <div className="container">
                <List>
                    {investments.map((investment, index) =>
                        <InvestmentItem key={"investment" + index} item={investment} onClick={this.onClickItem}/>
                    )}
                </List>
            </div>
        )
    }
}
const mapStateToProps = ({ investment }) => {
    const { investments } = investment;
    return {
        investments
    }
};
export default connect(mapStateToProps)(InvestmentPage);
