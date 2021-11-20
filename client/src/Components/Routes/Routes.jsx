import React from 'react'
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import { LandingPage } from '../LandingPage/LandingPage';
import Home  from '../HomePage/Home';
import PostPage from '../PostingPage/Post';

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path ="/sharekro">
                    <PostPage />
                </Route>
            </Switch>
        </div>
    )
}
