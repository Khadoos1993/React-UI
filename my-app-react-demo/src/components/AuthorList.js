import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


function AuthorList({currentCourse, authorState}){
    return (
        <>
        <div className="card">
            <div class="card-header">
                Authors
            </div>
            <div className="card-body">
                <div className="list-group">
                    {authorState.authors.map(author =>{
                        return (
                            <button 
                                key ={author.id} 
                                className={`list-group-item list-group-item-action rounded-0 ${author.id === authorState.currentAuthor.id ?'active':''}`}
                                onClick = {() => currentCourse(author)}
                            >
                            {author.name}</button>
                        );
                    })} 
                </div>
            </div>
            <div className="card-footer">
                <div className="row">
                    <div className="col-md-4 text-right">
                        <button class="btn btn-primary">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/* <pre>{JSON.stringify(props.authors, null, 2)}</pre> */}
        </>
    );
}


function mapStateToProps(state){
    return {
        authorState: state.serverAuthors
    };
}

export default connect(mapStateToProps)(AuthorList);