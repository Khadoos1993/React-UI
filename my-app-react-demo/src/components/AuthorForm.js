import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from 'prop-types';

function AuthorForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
        <TextInput
            type="text"
            id="name"
            label="Name"
            name="name"
            onChange={props.onChange}
            className="form-control"
            value={props.author.name}
            error ={props.errors.name}
        />

         <TextInput
            type="text"
            id="mainCategory"
            label="Category"
            name="mainCategory"
            onChange={props.onChange}
            className="form-control"
            value={props.author.mainCategory}
            error ={props.errors.mainCategory}
        />

        <div className="form-group">
            <label htmlFor="age">Age</label>
            <div className="field">
                <input
                    id="age"
                    type="number"
                    name="age"
                    onChange={props.onChange}
                    className="form-control"
                    value={props.author.age}
                />
            </div>
            {props.error.age && <div className="alert alert-danger">{props.error.age}</div>}
        </div>

      
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

AuthorForm.propTypes ={
    author: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

export default AuthorForm;
