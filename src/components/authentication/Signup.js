import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { formValid } from '../../services/FormValidationService';
import { connect } from 'react-redux';
import { register } from '../../store/actions/authActions';
import { clearErrors } from '../../store/actions/errorActions';
import Styles from './Signup.module.css'

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
class Signup extends Component {

    state = {
        formInput: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            isHouseOwner: '',
        },
        formErrors: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            isHouseOwner: '',
        },
        errorMsg: ''
    }
    handleChange = (event) => {
        console.log(event.target)
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'userName':
                formErrors.userName = value.length < 3 ? "Minimum 3 character required" : '';
                break;
            case 'email':
                formErrors.email = emailRegex.test(value) ? '' : "Enter a valid Email";
                break;
            case 'password':
                formErrors.password = value.length < 6 ? "Minimum 6 character required" : '';
                break;
            case 'confirmPassword':
                formErrors.confirmPassword = value !== this.state.formInput.password ? "Password doesn't match" : '';
                break;
            case 'confirmPassword':
                formErrors.isHouseOwner = value !== null ? "Please select user type." : '';
                break;
            default:
                break;
        }
        const updatedValue = { ...this.state.formInput }
        updatedValue[name] = value;
        this.setState({ formErrors, formInput: updatedValue });
    }
    register = () => {
        let userData = {
            firstName: this.state.formInput.firstName,
            lastName: this.state.formInput.lastName,
            email: this.state.formInput.email,
            password: this.state.formInput.password,
            isHouseOwner: parseInt(this.state.formInput.isHouseOwner)
        }
        if (formValid(this.state)) {
            this.props.register(userData);
        }
        if (this.state.errorMsg) {
            setTimeout(function () { this.props.clearErrors() }, 3000);
        }
        console.log(this.state)
    }
    componentDidUpdate(prevProps) {
        const { error, clearErrors, isAuthenticated } = this.props;

        if (isAuthenticated) {
            this.props.history.push('/');
        }
        if (error !== prevProps.error) {
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ ...this.state, errorMsg: error.msg })
                setTimeout(function () { clearErrors() }, 3000);
            } else {
                this.setState({ ...this.state, errorMsg: null })
            }

        }
    }

    render() {
        const { formErrors } = this.state;
        return (
            <div className="register-page">

                <div className={Styles.registerBox} >
                    <div className="login-logo">
                        <a href="../../index2.html"><b>Care</b>Taker</a>
                    </div>
                    {/* /.login-logo */}
                    <div className="card">
                        <div className="card-body login-card-body">
                            <p className="login-box-msg">Sign Up as a new user</p>
                            <form>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 mb-3">
                                        <div className="input-group">
                                            <input type="text"
                                                className={formErrors.firstName.length > 0 ? "form-control is-invalid" : "form-control"}
                                                id="firstName"
                                                placeholder="Enter Full Name"
                                                onChange={this.handleChange}
                                                aria-describedby="userNameHelp"
                                                name="firstName" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-user-alt" />
                                                </div>
                                            </div>
                                        </div>
                                        <span>
                                            {formErrors.firstName.length > 0 && (<small id="userNameHelp" className="form-text text-danger">{formErrors.userName}</small>)}
                                        </span>
                                    </div>
                                    <div className="col-sm-12 col-md-6 mb-3">
                                        <div className="input-group">
                                            <input type="text"
                                                className={formErrors.lastName.length > 0 ? "form-control is-invalid" : "form-control"}
                                                id="lastName"
                                                placeholder="Enter Full Name"
                                                onChange={this.handleChange}
                                                aria-describedby="userNameHelp"
                                                name="lastName" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-user-alt" />
                                                </div>
                                            </div>
                                        </div>
                                        <span>
                                            {formErrors.lastName.length > 0 && (<small id="userNameHelp" className="form-text text-danger">{formErrors.userName}</small>)}
                                        </span>
                                    </div>
                                    <div className="col-sm-12 col-md-6 mb-3">
                                        <div className="input-group">
                                            <input type="email"
                                                className="form-control"
                                                id="regEmail"
                                                placeholder="Enter Email"
                                                onChange={this.handleChange}
                                                aria-describedby="emailHelp"
                                                name="email" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-envelope" />
                                                </div>
                                            </div>

                                        </div>
                                        <span>
                                            {formErrors.email.length > 0 && (<small id="emailHelp" className="form-text text-danger">{formErrors.email}</small>)}
                                        </span>
                                    </div>
                                    <div className="col-sm-12 col-md-6 mb-3">
                                        <div className="input-group">
                                            <input type="password"
                                                className="form-control"
                                                id="regPassword"
                                                placeholder="Enter Password"
                                                onChange={this.handleChange}
                                                name="password" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-lock" />
                                                </div>
                                            </div>
                                        </div>
                                        <span>
                                            {formErrors.password.length > 0 && (<small id="passwordHelp" className="form-text text-danger">{formErrors.password}</small>)}
                                        </span>
                                    </div>

                                    <div className="col-sm-12 col-md-6 mb-3">
                                        <div className="input-group">
                                            <input type="password"
                                                className="form-control"
                                                id="regConfirmPassword"
                                                placeholder="Confirm Password"
                                                onChange={this.handleChange}
                                                name="confirmPassword" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-check-double" />
                                                </div>
                                            </div>
                                        </div>
                                        <span>{formErrors.confirmPassword.length > 0 && (<small id="passwordHelp" className="form-text text-danger">{formErrors.confirmPassword}</small>)}</span>
                                    </div>

                                    {/* <div className="col-sm-12 col-md-6 mb-3">
                                        <div className="input-group">
                                            <input type="text"
                                                className={formErrors.phone.length > 0 ? "form-control is-invalid" : "form-control"}
                                                id="phone"
                                                placeholder="Enter Phone Number"
                                                onChange={this.handleChange}
                                                aria-describedby="phoneHelp"
                                                name="phone" />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fas fa-phone" />
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-sm-12 col-md-6 mb-3">
                                        <div className="form-group">
                                            <select className="form-control"
                                                name="isHouseOwner"
                                                id="exampleFormControlSelect1"
                                                onChange={this.handleChange}>
                                                <option disabled selected>Select Status</option>
                                                <option value='1'>House Owner</option>
                                                <option value='0'>Renter</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    {/* /.col */}
                                    <div className="col-8">
                                        <p className="mb-0">
                                            <Link to="/login">Already a user? Login</Link>
                                        </p>
                                    </div>
                                    <div className="col-4">
                                        <button type="button" className="btn btn-block btn-primary" onClick={this.register}>Sign Up</button>
                                    </div>
                                    {/* /.col */}
                                </div>
                            </form>

                        </div>
                        {/* /.login-card-body */}
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, { register, clearErrors })(Signup);