import React from 'react';
import Navbar from '../Shared/Navbar';
import Header from '../Shared/Navbar';
import Banner from '../Home/Banner';
import Alltask from '../Home/Alltask';

const Homelayout = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Alltask></Alltask>
        </div>
    );
};

export default Homelayout;