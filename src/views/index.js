import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from '../components/Layout';
import MainWrapper from '../components/MainWrapper';
import OpportunityInvestmentPage from "./OpportunityInvestmentPage";
import OpportunityInvestmentDetail from "./OpportunityInvestmentPage/OpportunityInvestmentDetail";
import DownloadPage from "./DownloadPage";
import ReferralPage from "./ReferralPage";
import ParticipationPage from "./ParticipationPage";
import ParticipationDetail from "./ParticipationPage/ParticipationDetail";
import InvestmentPage from "./InvestmentPage"
import InvestmentDetail from "./InvestmentPage/InvestmentDetail";
import ProfilePage from "./ProfilePage";
class MainApp extends React.Component {
    render() {
        const {match} = this.props;
        return (
            <>
                <Layout/>
                <MainWrapper>
                    <Switch>
                        <Route exact path={`${match.url}/opportunity-investment`} component={OpportunityInvestmentPage}/>
                        <Route exact path={`${match.url}/opportunity-investment/:id`} component={OpportunityInvestmentDetail}/>
                        <Route exact path={`${match.url}/downloads`} component={DownloadPage}/>
                        <Route exact path={`${match.url}/referrals`} component={ReferralPage}/>
                        <Route exact path={`${match.url}/participation`} component={ParticipationPage}/>
                        <Route exact path={`${match.url}/participation/:id`} component={ParticipationDetail}/>
                        <Route exact path={`${match.url}/investment`} component={InvestmentPage}/>
                        <Route exact path={`${match.url}/investment/:id`} component={InvestmentDetail}/>
                        <Route exact path={`${match.url}/profile`} component={ProfilePage}/>
                    </Switch>
                </MainWrapper>
            </>
        );
    }
}


const mapStateToProps = ({auth}) => {
    const {user} = auth;
    return {user}
};
export default withRouter(connect(mapStateToProps)(MainApp));
