import React, {Component} from "react";

class TodoApp extends Component {

    render() {
        return (
            <div className="todoApp">
                <Login/>
            </div>
        )
    }
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'user',
            password: '',
            hasLoginFailed: false,
            showLoginSuccess: false
        };
    }

    render() {
        return (
            <div className="login">
                {/*<div>Invalid credentials</div>*/}
                <HasLoginFailed hasLoginFailed={this.state.hasLoginFailed}/>
                <ShowLoginSuccess showLoginSuccess={this.state.showLoginSuccess}/>
                User Name:<input type="text" name="username" value={this.state.username}
                                 onChange={(event) => this.handleChange(event)}/>
                Password:<input type="password" name="password" value={this.state.password}
                                onChange={(event) => this.handleChange(event)}/>
                <button className="login" onClick={() => this.loginClick()}>login</button>
            </div>
        )
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
            this.setState({
                hasLoginFailed: false,
                showLoginSuccess: true
            });
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
}

function HasLoginFailed(props) {
    if (props.hasLoginFailed) {
        return <div>hasLoginFailed</div>;
    }
    return null;

}

function ShowLoginSuccess(props) {
    if (props.showLoginSuccess) {
        return <div>Login success</div>;
    }
    return null;
}

export default TodoApp
