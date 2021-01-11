import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import NotFound from '../../views/examples/NotFound';
import Param from '../../views/examples/Param';

import './content.css'

export default (props) => {

    return (
        <main className="Content">
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/param/:id">
                    <Param/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </main>
    )
}