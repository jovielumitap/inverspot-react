import React, {Component} from "react";
import List from "@material-ui/core/List";
import ParticipationItem from "./components/ParticipationItem";
import {connect} from "react-redux";
import { fetchParticipationList} from "../../redux/actions";
const investments = [
    {name: "Contadero 403", date: "11-17", amount: "100k", percent: "30-33%"},
    {name: "Not found 404", date: "11-17", amount: "100k", percent: "35-40%"},
    {name: "Contadero 405", date: "11-17", amount: "100k", percent: "17-22%"},
    {name: "Contadero 406", date: "11-17", amount: "100k", percent: "10-15%"},
    {name: "Contadero 407", date: "11-17", amount: "100k", percent: "18-20%"},
];
class ParticipationPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchParticipationList())
    }
    onClickItem = (id) => {
        this.props.history.push(`participation/${id}`)
    };
    render() {
        const { participations } = this.props;
        return (
            <div className="container">
                <List>
                    {participations.map((participation, index) =>
                        <ParticipationItem key={"participation" + index} item={participation} onClick={this.onClickItem}/>
                    )}
                </List>
            </div>
        )
    }
}
const mapStateToProps = ({ participation }) => {
    const { participations } = participation;
    return {
        participations
    }
};
export default connect(mapStateToProps)(ParticipationPage);
