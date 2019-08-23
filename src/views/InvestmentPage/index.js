import React, {Component} from "react";
import List from "@material-ui/core/List";
import InvestmentItem from "./components/InvestmentItem";
import {connect} from "react-redux";
import { fetchInvestmentList } from "../../redux/actions";
class InvestmentPage extends Component {componentDidMount() {
    this.props.dispatch(fetchInvestmentList())
}

    onClickItem = (id) => {
        this.props.history.push(`investment/${id}`)
    };
    render() {
        const { investments } = this.props;
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
