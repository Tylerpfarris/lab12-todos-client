import React, { Component } from 'react'
import { logInUser } from '../api-utils.js';

export default class LogInPage extends Component {
    state = {
        email: '',
        password: '',
    }

    handleEmailChange = (e) => this.setState({
        email: e.target.value
    })

    handlePasswordChange = (e) => this.setState({
        password: e.target.value
    })

    handleSubmit = async e => {
        e.preventDefault();

        const user = await logInUser(this.state.email, this.state.password);

        this.props.handelUserChange(user);

        this.props.history.push('/todos');
    }

    render() {
        return (
            <div>
                Log In
                <form onSubmit={this.handleSubmit}>
                    <label>
                        e-mail
                         <input value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        password
                         <input value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button>Sign Up!</button>
                 </form>
            </div>
        )
    }
}
