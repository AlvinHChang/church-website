/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import AboutPage from 'containers/AboutPage/Loadable';
import SermonPage from 'containers/SermonPage/Loadable';
import GalleryPage from 'containers/GalleryPage/Loadable';
import NewcomerPage from 'containers/NewcomerPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Navbar from 'containers/Navbar/Loadable';
import WindowDimensionsProvider from "../WindowContext";

import GlobalStyle from '../../global-styles';

export default function App() {
    return (
        <div>
            <WindowDimensionsProvider>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/sermon" component={SermonPage} />
                    <Route exact path="/gallery" component={GalleryPage} />
                    <Route exact path="/newcomer" component={NewcomerPage} />
                    <Route component={NotFoundPage} />
                </Switch>
                <GlobalStyle />
            </WindowDimensionsProvider>
        </div>
  );
}
