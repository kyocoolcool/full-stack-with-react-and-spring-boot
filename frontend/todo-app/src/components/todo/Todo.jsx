import React, {Component} from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                {id: 1, description: 'learn react', isComplete: false, targetDate: new Date()},
                {id: 2, description: 'hard to react', isComplete: false, targetDate: new Date()},
                {id: 3, description: 'expert to react', isComplete: false, targetDate: new Date()}
            ]
        }
    }

    render() {
        return <>
            <h1>todo list</h1>
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <td>description</td>
                        <td>isComplete</td>
                        <td>targetDate</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.todo.map(todo =>
                        <tr key={todo.id}>
                            <td>{todo.description}</td>
                            <td>{todo.isComplete.toString()}</td>
                            <td>{todo.targetDate.toDateString()}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    }
}

export default Todo
