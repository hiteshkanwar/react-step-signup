import React, { Component }  from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
 import { logout } from "../../actions/logout";



class Logout extends Component {
  componentWillMount () {
      this.props.logout();
      this.props.history.push('/signin');
  }

  render () {
      return null;
  }
}

export default connect(null,{ logout })(Logout)

