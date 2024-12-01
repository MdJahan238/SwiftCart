import React from 'react';
import Header from '../component/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Shared/Footer';

const Layout = () => {
    return (
        <div>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Layout;