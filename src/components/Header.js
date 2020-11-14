import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
            <ul>
                <li><NavLink to="/" activeClassName="is-active" exact={true}>Home Page</NavLink></li>
                <li><NavLink to="/create" activeClassName="is-active">Create Page</NavLink></li>
                <li><NavLink to="/edit" activeClassName="is-active">Edit Page</NavLink></li>
                <li><NavLink to="/help" activeClassName="is-active">Help Page</NavLink></li>
            </ul>       
    </header>
);

export default Header;