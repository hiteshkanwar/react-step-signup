import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'


const Header = (props) =>
{
  const userLogged = (props.auth.authenticated || localStorage.getItem('user'))
  console.log(userLogged)
  return (
    <div>
      <h1>Post Application</h1>
      { userLogged && 
        <div>
          <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
          <NavLink to="/new" activeClassName="is-active">New</NavLink>
          <NavLink to="/logout" activeClassName="is-active">Logout</NavLink>
       </div>
     }
   </div>
  )
};

const mapStateToProps = (state) => {
  return{
   'auth': state.auth
  };
}

export default connect(mapStateToProps)(Header)



