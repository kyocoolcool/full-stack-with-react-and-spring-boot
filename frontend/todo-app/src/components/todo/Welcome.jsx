import React, {Component} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";

class Welcome extends Component {
    render() {
        return <>
            <h1>Welcome</h1>
            <div className="container">Welcome come in {this.props.match.params.name}.Manage your todo list<Link to={"/todo"}> here </Link>
                <FontAwesomeIcon icon={faCoffee} /> </div>

        </>
    }
}

export default Welcome
