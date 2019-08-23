import React, {Component} from "react";
import List from "@material-ui/core/List";
import ParticipationItem from "./components/ParticipationItem";
import {connect} from "react-redux";
import { fetchParticipationList} from "../../redux/actions";
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
