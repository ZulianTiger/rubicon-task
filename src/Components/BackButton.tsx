import React from 'react';
import { Link } from 'react-router-dom'

const BackButton = () => {
    return (
        <Link
            style={{
                textDecoration: "none",
                height: '100%',
                display: 'inline-block'
            }}
            to={'/'}
        >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <i className="fas fa-long-arrow-alt-left" style={{ color: "#01baef", fontSize: 40, margin: 10, marginTop: 12.5 }}></i>
                <h1 style={{ margin: 10, color: '#01baef' }} >Back</h1>
            </div>
        </Link>
    )
}

export default BackButton;