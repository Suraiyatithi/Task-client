
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/task-svgrepo-com.svg';
import '../Home/Allcss/Banner.css'




const Header = () => {
  
    return (
        <div >
          
          <Navbar collapseOnSelect expand="lg" bg='light' variant="light">
                <Container>
                <Nav className=''>
                            <img style={{width:"50px "}} src={logo} alt="" />
                            <h3 className='title'>Manage Task</h3>
                        </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                     
                        <Nav className="mx-auto me-3">
                           <Link className='text-decoration-none text-dark' to='/'> <h6>Home</h6></Link>
  </Nav>
          
  <Nav className='me-3 '><Link className='text-decoration-none text-dark' to='/blog'> <h6>Blogs</h6></Link></Nav>
                <Nav>
                       
          <Nav className='me-3 mt-1'>
           <Link className='text-decoration-none text-dark' to='/addtask'> <h6>Add a Task</h6></Link>
        </Nav>
        
    

                          
                               
                            
                        </Nav>
                      
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
        </div>
    );
};

export default Header;