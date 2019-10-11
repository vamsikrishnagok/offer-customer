import React from 'react';
import { Switch, Redirect,Route  } from 'react-router-dom';

import { RouteWithLayout } from './components';
import {
    Home as HomeView, SignIn as SignInView, Offers as OffersView, OfferDetail as OfferDetailView, Dashboard as DashboardView,
    MyOffers as MyOffersView, Profile as ProfileView, RedeemedDetails as RedeemedDetailsView,
    SignUp as SignUpView, Search as SearchView
} from './views'
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

const Routes = () => {
    return (
        <Switch>
            <Redirect
                exact
                from="/"
                to="/home"
            />
            <RouteWithLayout
                component={HomeView}
                exact
                layout={MainLayout}
                path="/home"
            />
            <RouteWithLayout
                component={OffersView}
                exact
                layout={MainLayout}
                path="/offers"
            />
            <RouteWithLayout
                component={SearchView}
                exact
                layout={MainLayout}
                path="/search"
            />
            <RouteWithLayout
                component={OfferDetailView}
                exact
                layout={MainLayout}
                path="/offers/:offerID"
            />
            <RouteWithLayout
                component={DashboardView}
                exact
                layout={MinimalLayout}
                path="/dashboard"
            />
            <RouteWithLayout
                component={MyOffersView}
                exact
                layout={MinimalLayout}
                path="/myoffers"
            />
            <RouteWithLayout
                component={ProfileView}
                exact
                layout={MinimalLayout}
                path="/profile"
            />
            <RouteWithLayout
                component={RedeemedDetailsView}
                exact
                layout={MinimalLayout}
                path="/redeem/:redeemID"
            />
            <Route
            component={SignInView}
            exact
            path="/login"
            />
            <Route
                component={SignUpView}
                exact
                path="/register"
            />

            <Redirect to="/not-found" />
        </Switch>
    );
};

export default Routes;

