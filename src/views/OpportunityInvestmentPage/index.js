import React, {Component} from "react";
import List from "@material-ui/core/List";
import OpportunityInvestmentItem from "./components/OpportunityInvestmentItem";
import {connect} from "react-redux";
import {fetchOpportunityList} from "../../redux/actions";
class OpportunityInvestmentPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchOpportunityList())
    }

    onClickItem = (id) => {
        this.props.history.push(`opportunity-investment/${id}`)
    };
    render() {
        const { opportunities } = this.props;
        return (
            <div className="container">
                <List>
                    {opportunities.map((item, index) =>
                        <OpportunityInvestmentItem key={"investment" + index} item={item} onClick={this.onClickItem}/>
                    )}
                </List>
            </div>
        )
    }
}
const mapStateToProps = ({ opportunity }) => {
    const { opportunities } = opportunity;
    return {
        opportunities
    }
};
export default connect(mapStateToProps)(OpportunityInvestmentPage);
