import React from 'react';
import Header from '../Shared/Navbar';
import Addtask from '../AddTask/Addtask';
import Footer from '../Shared/Footer';

const Addtasklayout = () => {
    return (
        <div>
            <Header></Header>
            <Addtask></Addtask>
            <Footer></Footer>
        </div>
    );
};

export default Addtasklayout;