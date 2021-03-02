import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';

import Header from './Components/Header.js';
import HomePage from './HomePage/HomePage.js';
import LogInPage from './AuthPages/LogInPage';
import SignUpPage from './AuthPages/SignUpPage';
import TodosListPage  from './Todos/TodosListPage.js';


export default class App extends Component {
    render() {
        return (
            <div>
            <Router>
              <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/todos" 
                            exact
                            render={(routerProps) => <TodosListPage {...routerProps} />} 
                        />
                        <Route 
                          path="/login" 
                          exact
                          render={(routerProps) => <LogInPage {...routerProps} />} 
                        />
                        <Route 
                          path="/signup" 
                          exact
                          render={(routerProps) => <SignUpPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}