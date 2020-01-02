import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "../../components/Header/";
import Sidebar from "../../components/Sidebar/";
import Breadcrumb from "../../components/Breadcrumb/";
import Aside from "../../components/Aside/";
import Footer from "../../components/Footer/";
/* Pages */
import Dashboard from "../../views/Dashboard/";

import CreateAds from "../../views/Ads/CreateAds/";
import EditAds from "../../views/Ads/EditAds/";
import ListAds from "../../views/Ads/ListAds";

import CreateCampaigns from "../../views/Campaigns/CreateCampaign/";
import EditCampaigns from "../../views/Campaigns/EditCampaign/";
import ListCampaigns from "../../views/Campaigns/ListCampaign/";

import CreateTours from "../../views/Tours/CreateTours/";
import EditTours from "../../views/Tours/EditTours/";
import ListTours from "../../views/Tours/ListTours/";

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route
                  path="/dashboard"
                  name="Dashboard"
                  component={Dashboard}
                />

                <Route
                  path="/ads/create"
                  name="CreateAds"
                  component={CreateAds}
                />
                <Route path="/ads/edit" name="EditAds" component={EditAds} />
                <Route path="/ads/list" name="ListAds" component={ListAds} />

                <Route
                  path="/campaign/create"
                  name="CreateCampaigns"
                  component={CreateCampaigns}
                />
                <Route
                  path="/campaign/edit"
                  name="EditCampaign"
                  component={EditCampaigns}
                />
                <Route
                  path="/campaign/list"
                  name="ListCampaign"
                  component={ListCampaigns}
                />

                <Route
                  path="/tours/create"
                  name="CreateTours"
                  component={CreateTours}
                />
                <Route
                  path="/tours/edit"
                  name="EditTours"
                  component={EditTours}
                />
                <Route
                  path="/tours/list"
                  name="ListTours"
                  component={ListTours}
                />

                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
