import React from 'react';
import gif from '../assets/giphy2.gif';
import Accordion from 'react-bootstrap/Accordion';


const Any = () => {
    return (
        <div className='mt-5 text-center mb-5'>
                <p className='text-success '>___________________________________________</p>
                <h2>FEEL FREE TO ASK</h2>
                <p className='text-success'>___________________________________________</p>
            <div className="row row-cols-sm-1 row-cols-lg-2 ">
                <div className="col pt-5 p-4">
                <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Is this Free to use?</Accordion.Header>
        <Accordion.Body>
     Yes. You don't need to pay for creating Task. Also we would like to Thank you for using our website.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can anyone can create a task?</Accordion.Header>
        <Accordion.Body>
         Yes. Feel free to create your desire task for the student.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Can I Create more than one task ?</Accordion.Header>
        <Accordion.Body>
        YES, of course you can add more then one task. Basically this website is making for creating task so feel free to create task.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Is it safe?</Accordion.Header>
        <Accordion.Body>
   Of course our website is fully safe for you.Feel free to use it.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </div>
                <div className="col">
                    <img src={gif} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Any;