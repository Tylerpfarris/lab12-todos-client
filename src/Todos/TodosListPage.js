import React, { Component } from 'react'
import { getTodos, addTodo, completeTodo } from '../api-utils.js';
import style from './TodosListPage.module.css';

export default class TodosListPage extends Component {
    state = {
        todos: [],
        todo: '',
    }

    componentDidMount = async () => {
        await this.fetchTodos();
    }

    fetchTodos = async () => {
        const todos = await getTodos(this.props.user.token);
        this.setState({ todos });
    }

    handleSubmit = async e => {
        e.preventDefault();

        await addTodo(this.state.todo, this.props.user.token);

        await this.fetchTodos();

        this.setState({ todo: '' });
    }

    handleTodoChange = e => this.setState({ todo: e.target.value })

    handleCompleteTodo = async (todoId) => {
        await completeTodo(todoId, this.props.user.token);
        this.fetchTodos();
    }
    render() {
        return (
            <div className={style.todoDiv}>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.todo} onChange={this.handleTodoChange} />
                    <button>Add To Do</button>
                </form>
                {!this.state.todos.length && <p>You Got Nothin To Do!</p>}
                {this.state.todos.map(todo => 
                    <p
                        key={`${todo.todo}-${todo.id}`}
                        onClick={() => this.handleCompleteTodo(todo.id)}
                        className={`
                            ${style.todo} ${todo.completed
                                ? 'completed'
                                : ''}`
                        }>
                        {todo.todo}
                        </p>)}
            </div>
        )
    }
}
