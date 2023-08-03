
import { Link } from 'react-router-dom';
import logo from '../assets/task-svgrepo-com.svg'

const Footer = () => {
    return (
        <div  className='text-white bg-dark pt-5 pb-5' >
          <h2 className='text-center mt-3 mb-3'>ABOUT US</h2>
          <p className='text-center'>___________________________________________</p>
          <div className="row row-cols-sm-1 row-cols-lg-3 mt-4">
          <div className="">
            <img className='w-25' src={logo} alt="" />
            <h5 className='mt-3 title'>Manage Task</h5>

          </div>
             
            <div className="">
            <h4>Contact us</h4>
            <p>Phone:+8809999999</p>
            <p><small>Email:<Link to='taskmanagement@gmail.com'>taskmanagement@gmail.com</Link></small></p>
            <p><small>google:<Link to='google.com'>www.google.taskmanagement.com</Link></small></p>
            </div>
            <div className="">
                <p>Self Improvment</p>
                <p>Power of YOu</p>
                <p>Skill Development</p>
                <p>Language</p>
            </div>
           
          </div>
        </div>
    );
};

export default Footer;