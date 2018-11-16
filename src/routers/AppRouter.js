import React from 'react';
import { Router, Link, Route, Switch, NavLink } from 'react-router-dom'
import AuthGuard from '../components/auth/authGuard';
import PostDashboard from '../components/PostDashboard';
import Header from '../components/Header';
import Logout from '../components/auth/Logout';
import PostDetail  from '../containers/PostDetail';
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import Step1 from '../components/auth/Step1';
import Step2 from '../components/auth/Step2';
import NotFound from '../components/NotFound';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();


const AppRouter = () => (
 <Router history={history}>
     <div>
	     <Header />
	     <Switch>
	      <Route path="/" component={AuthGuard(PostDashboard)} exact = {true}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	      <Route path="/show/:id" component={AuthGuard(PostDetail)} />                          
	      <Route path='/signin' component={SignIn} />                                                         
	       <Route path='/signup' component={SignUp} />
	       <Route path='/step1' component={AuthGuard(Step1)} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
	       <Route path='/step2' component={AuthGuard(Step2)} /> 
	       <Route path="/logout" component={Logout} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
	       <Route component={NotFound}/>
	 
	     </Switch>
	  </div>
   </Router>

);

export default AppRouter;