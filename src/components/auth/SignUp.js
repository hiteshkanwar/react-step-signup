import React, { Component }  from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
 import { signUp } from "../../actions/signup";


class SignUp extends Component {
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
    this.props.signUp(values.email, values.password)
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
          label="Email"
          name="email"
          type = "email"
          component={this.renderField}
        />
        <Field
          label="Password"
          name="password"
          component={this.renderField}
        />
        <Field
          label="Password"
          name="password_confirmation"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.email) {
    errors.email = "Enter a Email";
  }
  if (!values.password) {
    errors.password = "Enter Password";
  }
   if (values.password != values.password_confirmation) {
    errors.password = "Password and Password COnfirmation doesn't match";
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
  form: "SignUpForm"
})(connect(mapStateToProps, { signUp })(SignUp));

