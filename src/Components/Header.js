import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink> 
                <NavLink to="/todos">Todos</NavLink> 
                <NavLink to="/login">Log In</NavLink> 
                <NavLink to="/signup">Sign up</NavLink> 
                
            </div>
        )
    }
}
