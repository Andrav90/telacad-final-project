import React from 'react';
import Header from '../header/Header';
import './Layout.css';

function Layout(props) {
    return (
        <div className="layout-container">
            <Header />
            {props.children}
        </div>
    );
};

export default Layout;