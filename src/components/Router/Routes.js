import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Search from "../Search/Search"
import Navbar from "../Navbar/Navbar"
import AboutDevs from "../AboutDevs/AboutDevs"
import Header from "../Header/Header"

export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Navbar />
                <Header />
                <div>
                    <hr />
                    <Route name ="Home" exact path="/" component={Search} />
                    <Route name ="About Us" exact path ="/aboutus" component={AboutDevs} />
                    <hr />
                </div>
            </Router>
        )
    }
}