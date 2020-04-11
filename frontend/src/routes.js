import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Hotel from './pages/Hotel';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Main }></Route>
            <Route path="/hotel/:id" component={ Hotel }></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;