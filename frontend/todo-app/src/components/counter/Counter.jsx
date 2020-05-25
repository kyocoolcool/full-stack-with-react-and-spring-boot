import React, {Component} from "react";
import "./Counter.css"
import PropTypes from "prop-types";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {
        return (
            <div className="counter">
                {/*透過props實現同一模組傳入不同屬性效果*/}
                {/*透過props讓child可以呼叫parent method*/}
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="count" style={{fontSize: "50px"}}>{this.state.count}</span>
                <div>
                    <button className={"reset"} onClick={() => this.reset()}>reset</button>
                </div>
            </div>
        )
    }

    increment(by) {
        // console.log(`parent be called by child ${by}`);
        // prev參數是這個component的上一個state
        this.setState((prev) => {
                return {
                    count: prev.count + by
                }
            }
        )
    }

    decrement(by) {
        // console.log(`parent be called by child ${by}`);
        // prev參數是這個component的上一個state
        this.setState((prev) => {
                return {
                    count: prev.count - by
                }
            }
        )
    }

    reset = () => {
        this.setState(() => {
                return {
                    count: 0
                }
            }
        );
    }
}

class CounterButton extends Component {
    constructor() {
        super();
        // this.state = {
        //     count: 0
        // };
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    render() {
        return (
            <div className="counterButton">
                {/*進階操作直接使用parent method 傳入child參數值*/}
                <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                {/*<button onClick={() => this.show()}>+1</button>*/}
                {/*<button onClick={this.show}>+1</button>*/}
                {/*inline css in React */}
                {/*<span className="count" style={{fontSize: "50px"}}>{this.state.count}</span>*/}
            </div>
        )
    }

    //第一種賦值方式
    // increment() {
        // this.setState({
        //     count: this.state.count + this.props.by
        // });
    //     this.props.incrementMethod(this.props.by);
    // }

    //第二種賦值方式
    // show = () => this.setState({count: this.state.count + 1}, () => console.log(this.state.count));

    // decrement() {
        // this.setState({
        //     count: this.state.count - this.props.by
        // });
    //     this.props.decrementMethod(this.props.by);
    // }
}

//預設props
CounterButton.defaultProps = {
    by: 1
};

CounterButton.propTypes = {
    by: PropTypes.number
};

export default Counter
