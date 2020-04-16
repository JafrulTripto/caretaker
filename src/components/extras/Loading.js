import React from 'react';
import ReactLoading from 'react-loading';

export default function Loading() {
    return (
        <div className="login-page">
            <ReactLoading type="spokes" color="#0f4c75" height={'20%'} width={'20%'} />
        </div>
    )
}
