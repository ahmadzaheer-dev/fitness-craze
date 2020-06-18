import React from "react";
import ReactDOM from "react-dom";

const Header = ()=> {
    return (
        <div>
        <div className="nav">
            <div className="row">
                <a href="#" className="nav__logo">
                    Fitness
                    <span className="nav__logo--light"> Craze</span>
                </a>
                <ul className="nav__menu">
                    <li className="nav__menuItem">
                        <a href="#" className="nav__menuLink">BMI Calculator</a>
                    </li>
                    <li className="nav__menuItem">
                        <a href="#" className="nav__menuLink">Docs</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Header;