import React, {Component} from 'react';
import './App.css';
// 因為SecondComponent在FirstComponent中只能有一個export default，所以加{}讓React識別並import
import FirstComponent, {SecondComponent} from './components/learning-example/FirstComponent'
import ThirdComponent from "./components/learning-example/ThirdComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                hello world
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent/>
            </div>
        );
    }
}

export default App;

