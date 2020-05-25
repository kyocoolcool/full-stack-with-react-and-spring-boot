import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'user',
            password: '',
            hasLoginFailed: false,
            showLoginSuccess: false
        };
    }

    // 將function濃縮成一個
    handleChange = (event) => {
        this.setState({
            // 因為object不能為變數，所以加上[]
            [event.target.name]: event.target.value
        });
    };

    loginClick = () => {
        if (this.state.username === 'user' && this.state.password === 'user') {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
            // 登入成功跳轉react-router-dom api
            this.props.history.push("/welcome/" + this.state.username);
            // this.setState({
            //     hasLoginFailed: false,
            //     showLoginSuccess: true
            // });
        } else {
            this.setState({
                hasLoginFailed: true,
                showLoginSuccess: false
            });
        }
    }

    // handleUserChange = (event) => {
    //     this.setState({
    //         username: event.target.value
    //     });
    // };

    // handlePasswordChange = (event) => {
    //     this.setState({
    //         password: event.target.value
    //     });
    // };

    render() {
        return (
            <>
                <h1>Login</h1>
                <div className="container">
                    {/*<div>Invalid credentials</div>*/}
                    {/*<HasLoginFailed hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {/*<ShowLoginSuccess showLoginSuccess={this.state.showLoginSuccess}/>*/}
                    {/*利用&&判斷進階用法*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">hasLoginFailed</div>}
                    {this.state.showLoginSuccess && <div>Login success</div>}
                    User Name:<input type="text" name="username" value={this.state.username}
                                     onChange={(event) => this.handleChange(event)}/>
                    Password:<input type="password" name="password" value={this.state.password}
                                    onChange={(event) => this.handleChange(event)}/>
                    <button className="btn btn-success" onClick={() => this.loginClick()}>login</button>
                </div>
            </>
        )
    }
}

export default LoginComponent
