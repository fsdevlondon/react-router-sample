import React from "react";
import Main from "../components/Main";
import Home from "../components/Home";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import UserProfile from "../components/user/UserProfile";
import UserListContainer from "../containers/UserListContainer";
import WorkshopList from "../components/workshop/WorkshopList";

const Routes = (
    <Route path="/" component={Main}>
        <Route path="users" component={UserListContainer}>
            <Route path=":username" component={UserProfile} />
        </Route>
        <Route path="workshops" component={WorkshopList} />
        <IndexRoute component={Home} />
    </Route>
);

export default Routes;