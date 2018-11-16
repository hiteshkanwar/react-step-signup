import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { history } from '../../routers/AppRouter';

// import { hashHistory } from 'react-router'
// import { withRouter } from 'react-router'

export default function (ComposedComponent) {



    class Authentication extends Component {
         constructor( context) {
            super(context);
          }
       

        //if authenticated == false redirect to '/signin'
        componentWillMount() {
            if (!localStorage.getItem('user') && !this.props.authenticated) 
            {
                history.push('/signin')
            }
            // step redirect
            if (localStorage.getItem('step') === '0') {
              console.log(1)
              history.push('/step1');
            }
            else if (localStorage.getItem('step') === '1'){
              history.push('/step2');
            }
           
        }


        //if any props updated check if we are still authenticated
        //if not redirect to '/' again
        componentWillUpdate(nextProps, nextState) {
            if (!localStorage.getItem('user') && !nextProps.authenticated) {
                history.push('/signin')
            }
           // step redirect
            // if (localStorage.getItem('step') === '0') {
            //   history.push('/step1');
            // }
            // else if (localStorage.getItem('step') === '1'){
            //   history.push('/step2');
            // }
           
        }

        //render the passed component and its props
        render() {
            return <ComposedComponent {...this.props} />
        }
    }


    // Authentication.contextTypes = {
    //  router: React.PropTypes.object.isRequired
    // }

    //connect to store to map props
    function mapStateToProps(state) {
     
        return { authenticated: state.auth.authenticated}
    }

    //higher order function returned
    return connect(mapStateToProps)(Authentication)
}
