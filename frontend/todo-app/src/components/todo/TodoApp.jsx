import React, {Component} from "react";
import {BrowserRouter as Router , Route} from "react-router-dom";

class TodoApp extends Component {

    render() {
        return (
            <div className="todoApp">
                <Router>
                    <Route path="/" exact component={Login}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/welcome" component={Welcome}/>
                </Router>
            </div>
        );
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
                {/*<HasLoginFailed hasLoginFailed={this.state.hasLoginFailed}/>*/}
                {/*<ShowLoginSuccess showLoginSuccess={this.state.showLoginSuccess}/>*/}
                {/*利用&&判斷進階用法*/}
                {this.state.hasLoginFailed && <div>hasLoginFailed</div>}
                {this.state.showLoginSuccess && <div>Login success</div>}
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
            // 登入成功跳轉react-router-dom api
            this.props.history.push("/welcome");
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

class Welcome extends Component{
    render() {
       return <div>Welcome come in</div>
    }

}

export default TodoApp
