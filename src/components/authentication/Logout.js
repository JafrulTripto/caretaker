import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom';
import { logout } from '../../store/actions/authActions';
import { connect } from 'react-redux';

function Logout(props) {
    useEffect(() => {

        props.logout();
    }, []);

    return <Redirect to="/login" />
}
export default connect(null, { logout })(Logout);