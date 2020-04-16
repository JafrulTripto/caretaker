import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {

    state = {
        toggle: false
    }

    toggleMenuOpen = () => {
        this.setState({ toggle: !this.state.toggle });
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link navbar-danger">
                        <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light"><b>Care</b>Taker</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
                            </div>
                            <div className="info">
                                <a href="fake_url" className="d-block">{this.props.userData.name}</a>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class with font-awesome or any other icon font library */}
                                <li className="nav-item">
                                    <NavLink to="/home" className="nav-link" activeClassName="active">
                                        <i className="nav-icon fas fa-calendar-alt" />
                                        <p>Home<span className="badge badge-info right">2</span></p>
                                    </NavLink>
                                </li>
                                <li className={this.state.toggle ? "nav-item has-treeview" : "nav-item has-treeview menu-open"}>
                                    <div className="nav-link active" onClick={this.toggleMenuOpen}>
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            Dashboard
                                        <i className="right fas fa-angle-left" />
                                        </p>
                                    </div>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <NavLink to="/dashboard" className="nav-link" activeClassName="active">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Dashboard v1</p>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./index2.html" className="nav-link active">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Dashboard v2</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./index3.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Dashboard v3</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-header">EXAMPLES</li>
                                <li className="nav-item">
                                    <a href="pages/calendar.html" className="nav-link">
                                        <i className="nav-icon fas fa-calendar-alt" />
                                        <p>Calendar<span className="badge badge-info right">2</span></p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userData: state.auth.user
    }
}

export default connect(mapStateToProps)(Sidebar);