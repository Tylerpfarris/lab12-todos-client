import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';

import './App.css';

import Header from './Components/Header.js';
import HomePage from './HomePage/HomePage.js';
import LogInPage from './AuthPages/LogInPage';
import SignUpPage from './AuthPages/SignUpPage';
import TodosListPage  from './Todos/TodosListPage.js';
import { getUserFromLocalStorage, putUserInLocalStorage } from './local-storage-utils.js';
import PrivateRoute from './Components/PrivateRoute.js';


export default class App extends Component {
  state = {
    user: getUserFromLocalStorage()
  }

  handleUserChange = (user) => {
    this.setState({ user });

    putUserInLocalStorage(user);
  }

  handleLogOut = () => {
    this.handleUserChange();
    console.log(this.state)
  }

  render() {
    const { user } = this.state;
        return (
            <div className='main-div'>
            <Router>
              <Header
                user={this.state.user}
                handleLogOut={this.handleLogOut}/>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <PrivateRoute 
                            path="/todos" 
                            exact
                            token={user && user.token}
                            render={(routerProps) =>
                            <TodosListPage
                                user={this.state.user}
                                {...routerProps} />} 
                        />
                        <Route 
                          path="/login" 
                          exact
                          render={(routerProps) =>
                          <LogInPage
                            handleUserChange={this.handleUserChange}
                            {...routerProps} />} 
                        />
                        <Route 
                          path="/signup" 
                          exact
                          render={(routerProps) =>
                          <SignUpPage
                            handleUserChange={this.handleUserChange}
                            {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}