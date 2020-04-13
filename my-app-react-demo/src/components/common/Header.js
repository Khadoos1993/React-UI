import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from "prop-types";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import * as authApi from '../../api/authApi';

function Header({user, actions}){
    const activeStyle = {color: "orange"};

    function login(){
        authApi.login();
    }
    return (
        <nav>
            <NavLink exact to="/" activeStyle={activeStyle}>
                Home
            </NavLink> 
            {" | "} 
            <NavLink activeStyle={activeStyle} to="/about">
                About
            </NavLink> 
            {" | "} 
            <NavLink to="/courses" activeStyle={activeStyle}>
                Courses
            </NavLink>
            {" | "} 
            <NavLink to="/authors" activeStyle={activeStyle}>
                Authors
            </NavLink>
            {" | "}
            <NavLink  to='' onClick={() =>  user.isAuthenticated ? actions.logoutUser():login()}>
                {user.isAuthenticated?"Logout": "Log In"}
            </NavLink>
        </nav>
    );
}

function mapStateToProps(state){
    return {
        user: state.user,
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

Header.propTypes ={
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);