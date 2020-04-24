import React, {Component} from "react";
import "./counter.css"

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>+1</button>
                {/*<button onClick={() => this.show()}>+1</button>*/}
                {/*<button onClick={this.show}>+1</button>*/}
                <span className="count">{this.state.count}</span>
            </div>
        )
    }

    //第一種賦值方式
    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    //第二種賦值方式
    show = () => this.setState({count: this.state.count + 1}, () => console.log(this.state.count));

}

export default Counter
