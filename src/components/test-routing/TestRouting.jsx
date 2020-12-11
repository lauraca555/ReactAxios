import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from './children/DashBoard';
import Home from './children/Home';
import About from './children/About';
import Error from './children/Error';
import Navbar from './children/Navbar';

class TestRouting extends React.Component {

    render(){
        return(
            <>
                <BrowserRouter>
                <Navbar/>
                    <Switch>
                    
                        <Route exact path='/' component={Home} />
                        <Route path='/dashboard' component={DashBoard}/>
                        <Route path='/about' component={About} />
                        <Route component={Error} />
                    </Switch>

                </BrowserRouter>
            </>
        )
    }

}

export default TestRouting;