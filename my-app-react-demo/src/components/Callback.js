import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {bindActionCreators} from 'redux';
import * as userActions from '../redux/actions/userActions';

function CallBack({history, actions}){
    useEffect(() =>{
        if(history.location.search.indexOf("code") > 0)
            actions.getUser().then(() =>{
                toast.success("User Logged in Successfully.");
                history.push('/');
            });
    },[]);

    return (
        <div>Handling Logging</div>
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

CallBack.propTypes ={
    actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CallBack);