import React, { useEffect, Fragment } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../extras/Loading';

function MainLayout(props) {


    if (props.auth.isAuthenticated && props.auth.user) {
        return (
            <Fragment>
                <Navbar />
                <Sidebar />
                {props.children}
                <Footer />
            </Fragment>
        )
    }
    else if (props.auth.isAuthenticated === false || props.auth.access_token === null) {
        return <Redirect to='/login' />
    } else {
        return <Loading />
    }

}

const mapStateToProps = state => ({
    auth: state.auth,
})

export default connect(mapStateToProps)(MainLayout)
