import React from "react";
import ReactDOM, { render } from "react-dom";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header';
import Bmi from './components/bmi-calculator';
import Footer from './components/footer';
import "./styles/styles.scss";

const BmiCalculator = () =>{
    return(
        <div>
            <Header />
            <div className="back">
                <div className="row col-2-1-1">
                    <div></div>
                    <div><Bmi /></div>
                </div>
            </div>
            <Footer />
        </div>  
    )
}

const Home = () => (<h1>This is Home Page</h1>);

const Fat = () => (<h1>This is Fat Calculator</h1>);


const routes= (
    <div>
    <Router>
        <div>
            <Route path="/" exact={true} component={Home} />
            <Route path="/bmi" component={BmiCalculator} />
            <Route path="/fat" component={Fat} />    
        </div>
    </Router>
    </div>
)

const root = document.getElementById("app");
ReactDOM.render(routes, root);