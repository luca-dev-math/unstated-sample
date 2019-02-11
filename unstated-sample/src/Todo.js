import React from 'react';
import { Subscribe } from "unstated";
import TodoContainer from './TodoContainer';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ''
        };
    }

    changeText = e => {
        this.setState({description: e.target.value});
    };

    register = addTodo => {
        addTodo(this.state.description);
        this.setState({description: ''});
    };

    render() {
        return (
            <div>
                <Subscribe to={[TodoContainer]}>
                    { todoContainer => (
                        <div>
                            <div>
                                <input type='text' placeholder='Todoを入力してね' value={this.state.description} onChange={this.changeText}/>
                                <button onClick={() => this.register(todoContainer.addTodo)}> OK </button>
                            </div>

                            <div>
                                {todoContainer.state.todos.map(todo => (
                                    <div>
                                        <span>
                                            {todo.description}
                                        </span>
                                        <button onClick={() => todoContainer.deleteTodo(todo.id)}> × </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </Subscribe>
            </div>
        );
    }
}