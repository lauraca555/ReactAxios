import React from 'react'
import {  NavLink } from 'react-router-dom';


class Navbar extends React.Component{

    render(){
        return(
            <header className="navbar navbar-expand-lg navbar-light bg-warning">
                <a className="navbar-brand" href="/">Mon jolie site</a>
                <button className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-2 mx-3 ">
                            <NavLink 
                            className ="active"
                            activeClassName="text-info"
                            
                            exact
                            to="/">Home

                            </NavLink>
                             
                        </li>
                        <li className="nav-item ml-2 mx-3 ">
                            <NavLink 
                            className ="active"
                            activeClassName="text-info"
                            to="/dashboard">Dashboard
                            </NavLink>
                            
                        </li>
                        <li className="nav-item ml-2 mx-3 ">
                            <NavLink 
                            className ="active"
                            activeClassName="text-info"
                            to="/about">About

                            </NavLink>
                            
                        </li>
                    </ul>
                </div>
            </header>
        )
    }

}

export default Navbar; 