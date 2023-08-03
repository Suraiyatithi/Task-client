import React from 'react';
import Navbar from '../Shared/Navbar';
import Header from '../Shared/Navbar';
import Banner from '../Home/Banner';
import Alltask from '../Home/Alltask';
import Footer from '../Shared/Footer';
import Any from '../Home/Any';

const Homelayout = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Alltask></Alltask>
            <Any></Any>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;