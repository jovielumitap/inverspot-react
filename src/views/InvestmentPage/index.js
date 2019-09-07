import React, {Component} from "react";
import List from "@material-ui/core/List";
import InvestmentItem from "./components/InvestmentItem";
import {connect} from "react-redux";
import {fetchInvestmentList} from "../../redux/actions";
import {Header} from "../../components/Header";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Swipeable} from "react-swipeable";
import {withStyles} from "@material-ui/core";

class InvestmentPage extends Component {
    onSwipeAction = (e) => {
        const deltaX = Math.abs(e.deltaX);
        const {value} = this.state;
        if (deltaX < 100) return false;
        switch (e.dir) {
            case 'Left':
                const v1 = value === 2 ? 0 : value + 1;
                this.setState({value: v1});
                return;
            case 'Right':
                const v = value === 0 ? 2 : value - 1;
                this.setState({value: v});
                return;
            default:
                return;
        }
    };
    handleChange = (event, value) => {
        this.setState({value});
    };
    componentDidMount() {
        this.props.dispatch(fetchInvestmentList())
    }

    onClickItem = (id) => {
        this.props.history.push(`investment/${id}`)
    };
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            open: false
        };
    }
    render() {
        const { investments, classes } = this.props;
        const { value } = this.state;
        return (
            <>
                <Header title={"Inversiones"}/>
                <div className="container">
                    <Swipeable className="d-flex flex-column"
                               onSwipedLeft={(eventData) => this.onSwipeAction(eventData)}
                               onSwipedRight={(eventData) => this.onSwipeAction(eventData)}>
                        <div className="tabs-container">
                            <Tabs
                                value={value}
                                onChange={this.handleChange}
                                variant="fullWidth"
                                classes={{
                                    indicator: classes.indicator
                                }}
                                scrollButtons="on"
                            >
                                <Tab className="tab" style={{color: value === 0 ? "#662D91" : "#CCCCCC"}}
                                     label={"Abiertas"}/>
                                <Tab className="tab tab-left-border"
                                     style={{color: value === 1 ? "#662D91" : "#CCCCCC"}}
                                     label={"Cerradas"}/>
                            </Tabs>
                        </div>
                        {value === 0 &&
                            <List>
                                {investments.map((investment, index) =>
                                    <InvestmentItem key={"investment" + index} item={investment} onClick={this.onClickItem}/>
                                )}
                            </List>
                        }
                        {value === 1 &&
                            <List>
                                {investments.map((investment, index) =>
                                    <InvestmentItem key={"investment" + index} item={investment} onClick={this.onClickItem}/>
                                )}
                            </List>
                        }
                    </Swipeable>
                </div>
            </>
        )
    }
}

const mapStateToProps = ({investment}) => {
    const {investments} = investment;
    return {
        investments
    }
};
const styles = theme => ({
    indicator: {
        backgroundColor: '#662D91',
    },
});
export default connect(mapStateToProps)(withStyles(styles)(InvestmentPage));
