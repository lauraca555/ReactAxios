import React from 'react';
import DashBoard from './children/DashBoard';
import Home from './children/Home';
import About from './children/About';
import Error from './children/Error';
import { Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/dashboard' component={DashBoard}/>
                <Route path='/about' component={About} />
                <Route component={Error} />
            </Switch>
        ) 
    }

}

export default Routes;
