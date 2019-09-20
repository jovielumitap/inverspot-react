import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from '../components/Layout';
import MainWrapper from '../components/MainWrapper';
import OpportunityInvestmentPage from "./OpportunityInvestmentPage";
import OpportunityInvestmentDetail from "./OpportunityInvestmentPage/OpportunityInvestmentDetail";
import DownloadPage from "./DownloadPage";
import ReferralPage from "./ReferralPage";
import ParticipationPage from "./ApartadasPage";
import ParticipationDetail from "./ApartadasPage/ApartadasDetail";
import InvestmentPage from "./InvestmentPage"
import InvestmentDetail from "./InvestmentPage/InvestmentDetail";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";
import CommoDialog from "../components/CommoDialog";
import {toggleCommoModal} from "../redux/actions";
class MainApp extends React.Component {
    render() {
        const { match, open_commo } = this.props;
        return (
            <>
                <Layout/>
                <MainWrapper>
                    <Switch>
                        <Route exact path={`${match.url}/home-page`} component={HomePage}/>
                        <Route exact path={`${match.url}/opportunity-investment`} component={OpportunityInvestmentPage}/>
                        <Route exact path={`${match.url}/opportunity-investment/:id`} component={OpportunityInvestmentDetail}/>
                        <Route exact path={`${match.url}/downloads`} component={DownloadPage}/>
                        <Route exact path={`${match.url}/referrals`} component={ReferralPage}/>
                        <Route exact path={`${match.url}/apartadas`} component={ParticipationPage}/>
                        <Route exact path={`${match.url}/apartadas/:id`} component={ParticipationDetail}/>
                        <Route exact path={`${match.url}/investment`} component={InvestmentPage}/>
                        <Route exact path={`${match.url}/investment/:id`} component={InvestmentDetail}/>
                        <Route exact path={`${match.url}/profile`} component={ProfilePage}/>
                    </Switch>
                </MainWrapper>
                <CommoDialog open={open_commo} toggleModal={this.props.dispatchToggleCommoModal}/>
            </>
        );
    }
}


const mapStateToProps = ({ auth, handleModal }) => {
    const { user } = auth;
    const { open_commo } = handleModal;
    return { user, open_commo }
};
const mapDispatchToProps = dispatch => ({
    dispatchToggleCommoModal: () => dispatch(toggleCommoModal())
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainApp));
