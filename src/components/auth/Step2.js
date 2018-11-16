import React, { Component }  from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
 import { step2 } from "../../actions/step2";


class Step2 extends Component {
  renderField(field) {
    const {type, meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type= {type} {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.step2(values)
    // this.props.signIn(values, () => {
    //   this.props.history.push("/");
    // });
  }

  render() {
    const { handleSubmit, auth } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
       <div className={typeof error!='undefined'?'show alert alert-danger': 'hidden'}>
             <strong>{auth.error}</strong>
        </div>
        <Field
          label="Mother Name"
          name="mother_name"
          type = "text"
          component={this.renderField}
        />
        <Field
          label="Father Name"
          name="father_name"
          type = "text"
          component={this.renderField}
        />
       
        <button type="submit" className="btn btn-primary">Save and Continue</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.first_name) {
    errors.first_name = "Enter First Name";
  }
  if (!values.last_name) {
    errors.last_name = "Enter Last Name";
  }
   

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

const mapStateToProps = (state) => {
  return{
   'auth': state.auth
  };
}

export default reduxForm({
  validate,
  form: "Step2Form"
})(connect(mapStateToProps, { step2 })(Step2));

