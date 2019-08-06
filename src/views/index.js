import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from '../components/Layout';
import MainWrapper from '../components/MainWrapper';
import Investment from "./InvestmentPage";
import InvestmentDetail from "./InvestmentPage/InvestmentDetail";

class MainApp extends React.Component {
    render() {
        const {match} = this.props;
        return (
            <>
                <Layout/>
                <MainWrapper>
                    <Switch>
                        <Route exact path={`${match.url}/investment`} component={Investment}/>
                        <Route exact path={`${match.url}/investment/detail`} component={InvestmentDetail}/>
                    </Switch>
                </MainWrapper>
            </>
        );
    }
}


const mapStateToProps = ({auth}) => {
    const {authUser} = auth;
    return {authUser}
};
export default withRouter(connect(mapStateToProps)(MainApp));
