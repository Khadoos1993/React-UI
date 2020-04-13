import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {bindActionCreators} from 'redux';
import * as authorActions from '../redux/actions/authorActions';
import AuthorList from './AuthorList';
import AuthorForm from './AuthorForm';
import { toast } from 'react-toastify';

function AuthorPage(props){
    //const [currentAuthor, setCurrentAuthor] = useState({});

    const [isAuthorAdded, setIsAuthorAdded] = useState(false);

    const [errors, setErrors] = useState({});

    const [author, setAuthor] = useState({
        id:null,
        name:"",
        mainCategory:"",
        age:null
    });

    useEffect(() =>{
        console.log("inside effect");
        if(props.authorState.authors.length === 0){
            props.actions.loadServerAuthors().catch(error =>{
                alert("server author loading failed. "+error);
            });
        }
        

    },[isAuthorAdded]);

    function currentCourse(author){
        props.actions.selectAuthor(author);
        setAuthor(author);
    }

    function handleChange({target}){
        setAuthor({
            ...author, 
            [target.name]: target.value
        });
    }
    function handleSubmit(event){
        debugger;
        event.preventDefault();
        props.actions.saveAuthor(author).then(() =>{
            toast.success("Author saved.")
        }).catch(error =>{
            toast.error("Adding Author Data failed.");
        })
    }


    return (
      <div className="row">
            <div className="col-md-4">
                <AuthorList currentCourse={currentCourse} />
            </div>
            <div className="col-md-8">
                {Object.keys(props.authorState.currentAuthor).length  > 0 && 
                <AuthorForm 
                    author={author}
                    onChange={handleChange} 
                    onSubmit={handleSubmit}
                    errors = {errors}
                    />}     
            </div>
      </div>
    );
}

function mapDispatchToProps(dispatch){
    return {
        actions: {
            loadServerAuthors: bindActionCreators(authorActions.loadServerAuthors , dispatch),
            selectAuthor: bindActionCreators(authorActions.selectCurrentAuthor , dispatch),
            saveAuthor: bindActionCreators(authorActions.saveAuthor , dispatch),
        }
    };
}

function mapStateToProps(state){
    return {
        authorState: state.serverAuthors
    };
}

AuthorPage.propTypes ={
    actions:PropTypes.object.isRequired,
    authorState:PropTypes.object.isRequired
}

export default connect(mapStateToProps,mapDispatchToProps)(AuthorPage);