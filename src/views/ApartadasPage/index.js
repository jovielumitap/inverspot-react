import React, {Component} from "react";
import List from "@material-ui/core/List";
import ApartadasItem from "./components/ApartadasItem";
import {connect} from "react-redux";
import {fetchParticipationList} from "../../redux/actions";
import {Header} from "../../components/Header";

class ApartadasPage extends Component {
    componentDidMount() {
        this.props.dispatch(fetchParticipationList())
    }

    onClickItem = (id) => {
        this.props.history.push(`apartadas/${id}`)
    };

    render() {
        const {participations} = this.props;
        return (
            <>
                <Header title={"Apartadas"}/>
                <div className="container">
                    <List>
                        {participations.map((participation, index) =>
                            <ApartadasItem key={"participation" + index} item={participation}
                                           onClick={this.onClickItem}/>
                        )}
                    </List>
                </div>
            </>
        )
    }
}

const mapStateToProps = ({participation}) => {
    const {participations} = participation;
    return {
        participations
    }
};
export default connect(mapStateToProps)(ApartadasPage);
