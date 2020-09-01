import React from 'react';
import UserForm from '../../components/userForm/UserForm';
import Layout from '../../components/layout/Layout';
import './Home.css';

function Home() {
    return (
        <div className="home-page-container">
            <Layout>
                <UserForm />
            </Layout>
        </div>
    );
};

export default Home;