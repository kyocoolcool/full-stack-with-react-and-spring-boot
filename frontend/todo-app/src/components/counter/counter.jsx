import React, {Component} from "react";
import "./counter.css"
import PropTypes from "prop-types";

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
                {/*透過props實現同一模組傳入不同屬性效果*/}
                {/*透過props讓child可以呼叫parent method*/}
                <CounterButton by={1} incrementMethod={this.increment}/>
                <CounterButton by={5} incrementMethod={this.increment}/>
                <CounterButton by={10} incrementMethod={this.increment}/>
                <span className="count" style={{fontSize: "50px"}}>{this.state.count}</span>
            </div>
        )
    }

    increment(by) {
        // console.log(`parent be called by child ${by}`);
        this.setState({
            count: this.state.count + by
        })
    }
}

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div className="counterButton">
                <button onClick={this.increment}>+{this.props.by}</button>
                {/*<button onClick={() => this.show()}>+1</button>*/}
                {/*<button onClick={this.show}>+1</button>*/}
                {/*inline css in React */}
                {/*<span className="count" style={{fontSize: "50px"}}>{this.state.count}</span>*/}
            </div>
        )
    }

    //第一種賦值方式
    increment() {
        this.setState({
            count: this.state.count + this.props.by
        });
        this.props.incrementMethod(this.props.by);
    }

    //第二種賦值方式
    show = () => this.setState({count: this.state.count + 1}, () => console.log(this.state.count));

}

//預設props
CounterButton.defaultProps = {
    by: 1
};

CounterButton.propTypes = {
    by: PropTypes.number
};

export default Counter
