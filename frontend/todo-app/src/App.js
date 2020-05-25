import React, {Component} from 'react';
// 因為SecondComponent在FirstComponent中只能有一個export default，所以加{}讓React識別並import
import FirstComponent from './components/learning-example/FirstComponent'
import ThirdComponent from "./components/learning-example/ThirdComponent";
import SecondComponent from "./components/learning-example/SecondComponent";
import Counter from "./components/counter/Counter";
import TodoApp from "./components/todo/TodoApp";
import './App.css';
import './bootstrap.css'
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




class App extends Component {
    render() {
        return (
            <div className="App">
              {/*<Counter/>*/}
              <TodoApp/>
            </div>
        );
    }
}

export default App;


class LearningComponent extends Component {
    render() {
        return (
            <div className="LearningComponent">
                hello React
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent/>
            </div>
        );
    }
}
