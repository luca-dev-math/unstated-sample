import React from 'react';
import { Container } from "unstated";

export default class TodoContainer extends Container {
    state = {
        id: 0,
        todos: []
    };

    addTodo = newTodo => {
        const todo = { id: this.state.id, description: newTodo};
        this.setState({id: this.state.id+1, todos: [...this.state.todos, todo]});
    };

    deleteTodo = id => {
        this.setState({...this.state, todos: this.state.todos.filter(todo => todo.id !== id)});
    };
}



