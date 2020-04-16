import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { clearErrors } from '../../store/actions/errorActions'



class Login extends Component {

    state = {
        email: '',
        password: '',
        errorMsg: ''
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    login = () => {
        let { email, password } = this.state;
        let credentials = {
            email,
            password
        }
        this.props.login(credentials);
    }
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated, clearErrors } = this.props

        if (isAuthenticated) {
            this.props.history.push('/');
        }
        else if (error !== prevProps.error) {
            if (error.id === 'LOGIN_FAILED') {
                this.setState({ ...this.state, errorMsg: error.msg })
                setTimeout(function () { clearErrors() }, 4000);
            } else {
                this.setState({ ...this.state, errorMsg: null })
            }

        }

    }
    render() {
        return (
            <div className="login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>Care</b>Taker</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign in to start your session</p>
                            <form>
                                <div className="input-group mb-3">
                                    <input type="email"
                                        className="form-control"
                                        id="loginEmail"
                                        onChange={this.handleChange}
                                        aria-describedby="emailHelp"
                                        name="email" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="password"
                                        className="form-control"
                                        id="loginPassword"
                                        onChange={this.handleChange}
                                        name="password" />
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fas fa-lock" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="icheck-primary">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">
                                                Remember Me
                                        </label>
                                        </div>
                                    </div>
                                    {/* /.col */}
                                    <div className="col-4">
                                        <button type="button" className="btn btn-block btn-primary" onClick={this.login}>Sign In</button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>
                            <p className="mb-1">
                                <a href="forgot-password.html">I forgot my password</a>
                            </p>
                            <p className="mb-0">
                                <Link to="/signup">Register as new user</Link>
                            </p>
                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})
export default connect(mapStateToProps, { login, clearErrors })(Login);
