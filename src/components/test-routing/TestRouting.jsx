import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import Navbar from './children/Navbar';
import Routes from './Routes';

class TestRouting extends React.Component {

    render(){
        return(
            <>
                <BrowserRouter>
                    <Navbar/>
                    <Routes/>  
                </BrowserRouter>
            </>
        )
    }

}

export default TestRouting;