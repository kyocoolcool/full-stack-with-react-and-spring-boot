import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FootComponent.jsx";
import Welcome from "./Welcome.jsx";
import LoginComponent from "./LoginComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import Todo from "./Todo";
import AuthenticatedRoute from "./AuthenticatedRoute";
import ErrorComponent from "./ErrorComponent";

class TodoApp extends Component {

    render() {
        return (
            <div className="todoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={Welcome}/>
                        <AuthenticatedRoute path="/todo" component={Todo}/>
                        <Route component={ErrorComponent()}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        );
    }
}

// function HasLoginFailed(props) {
//     if (props.hasLoginFailed) {
//         return <div>hasLoginFailed</div>;
//     }
//     return null;
//
// }
//
// function ShowLoginSuccess(props) {
//     if (props.showLoginSuccess) {
//         return <div>Login success</div>;
//     }
//     return null;
// }
export default TodoApp
