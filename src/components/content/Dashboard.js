import React, { Component } from 'react'
import RegisterHouse from '../houses/RegisterHouse'

export default class Dashboard extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        console.log("render")
        return (
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    {/* <li className="breadcrumb-item"><a href="#">Home</a></li> */}
                                    <li className="breadcrumb-item active">{this.props.location.pathname}</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                {/* USERS LIST */}
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Latest Members</h3>
                                        <div className="card-tools">
                                            <span className="badge badge-danger">8 New Members</span>
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body p-0">
                                        <ul className="users-list clearfix">
                                            <li>
                                                <img src="dist/img/user1-128x128.jpg" alt="User Image" />
                                                <a className="users-list-name" href="#">Alexander Pierce</a>
                                                <span className="users-list-date">Today</span>
                                            </li>
                                            <li>
                                                <img src="dist/img/user8-128x128.jpg" alt="User Image" />
                                                <a className="users-list-name" href="#">Norman</a>
                                                <span className="users-list-date">Yesterday</span>
                                            </li>
                                            <li>
                                                <img src="dist/img/user7-128x128.jpg" alt="User Image" />
                                                <a className="users-list-name" href="#">Jane</a>
                                                <span className="users-list-date">12 Jan</span>
                                            </li>
                                            <li>
                                                <img src="dist/img/user6-128x128.jpg" alt="User Image" />
                                                <a className="users-list-name" href="#">John</a>
                                                <span className="users-list-date">12 Jan</span>
                                            </li>
                                            <li>
                                                <img src="dist/img/user2-160x160.jpg" alt="User Image" />
                                                <a className="users-list-name" href="#">Alexander</a>
                                                <span className="users-list-date">13 Jan</span>
                                            </li>
                                            <li>
                                                <img src="dist/img/user5-128x128.jpg" alt="User Image" />
                                                <a className="users-list-name" href="#">Sarah</a>
                                                <span className="users-list-date">14 Jan</span>
                                            </li>
                                            <li>
                                                <img src="dist/img/user4-128x128.jpg" alt="User Image" />
                                                <a className="users-list-name" href="#">Nora</a>
                                                <span className="users-list-date">15 Jan</span>
                                            </li>
                                            <li>
                                                <img src="dist/img/user3-128x128.jpg" alt="User Image" />
                                                <a className="users-list-name" href="#">Nadia</a>
                                                <span className="users-list-date">15 Jan</span>
                                            </li>
                                        </ul>
                                        {/* /.users-list */}
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer text-center">
                                        <a href="!#">View All Users</a>
                                    </div>
                                    {/* /.card-footer */}
                                </div>
                                {/*/.card */}
                            </div>
                            <div className="col-md-6">
                                {/* USERS LIST */}
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Latest Members</h3>
                                        <div className="card-tools">
                                            <span className="badge badge-danger">8 New Members</span>
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body p-0">

                                        <h5>No house registered</h5>
                                        {/* /.users-list */}
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer text-center">
                                        <button type="button"
                                            className="btn btn-block bg-gradient-primary btn-sm"
                                            data-toggle="modal"
                                            data-target="#modal-lg">
                                            Add New House</button>
                                    </div>
                                    {/* /.card-footer */}
                                </div>
                                {/*/.card */}
                            </div>

                        </div>

                    </div>
                    <RegisterHouse />
                </section>
                {/* /.content */}
            </div>

        )
    }
}
