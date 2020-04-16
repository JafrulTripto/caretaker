import React, { useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import Content from './components/content/Content';
import Login from './components/authentication/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser } from './store/actions/authActions';
import Logout from './components/authentication/Logout';
import Error404 from './components/extras/404';
import Signup from './components/authentication/Signup';
import Dashboard from './components/content/Dashboard';

function App(props) {

  useEffect(() => {
    if (props.auth.access_token) {
      props.loadUser();
    } else {
      console.log(props)
    }
  }, [props.auth.isAuthenticated]);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/logout" exact component={Logout} />
        </Switch>
        <MainLayout>
          <Switch>
            {/* <Route path="/" exact component={Content} /> */}
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path='*' exact={true} component={Error404} />
          </Switch>

        </MainLayout>



      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { loadUser })(App)