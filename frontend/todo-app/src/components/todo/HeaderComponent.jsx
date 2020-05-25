import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService.js";
import {Link,withRouter} from "react-router-dom";

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="https://kyocoolcool.com" className="navbar-brand">kyocoolcool</a></div>
                <ul className="navbar-nav">
                    {AuthenticationService.isUserLoggedIn() && <li><Link className="nav-link" to={"/welcome/user"}>home</Link></li>}
                    {AuthenticationService.isUserLoggedIn() && <li><Link className="nav-link" to={"/todo"}>todoList</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!AuthenticationService.isUserLoggedIn() && <li><Link className="nav-link" to={"/login"}>login</Link></li>}
                    {AuthenticationService.isUserLoggedIn() && <li><Link className="nav-link" to={"/logout"} onClick={AuthenticationService.logout}>logout</Link></li>}
                </ul>
            </nav>
        </header>;
    }
}

export default withRouter(HeaderComponent)
