import React from 'react'
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import { LandingPage } from '../LandingPage/LandingPage';

import Home  from '../HomePage/Home';
import PostPage from '../PostingPage/Post';
import Chat from '../chat/Chat';
import Success from '../SuccessPage/Success';

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
                <Route path ="/payment">
                    <Success />

                </Route>
                <Route path ="/chat">
                    <Chat/>

                </Route>
            </Switch>
        </div>
    )
}
