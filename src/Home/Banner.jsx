import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/workaholic-african-american-leader-standing-front-presentation-monitor-explaining-marketing-pr (1).jpg';
import img2 from '../assets/html-css-collage-concept-with-person.jpg';
import img3 from '../assets/woman-codes.jpg';
import './Allcss/Banner.css'; 
import { FaArrowLeft, FaArrowRight, FaBeer } from "react-icons/fa";

const Banner = () => {
  return (
    <div>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item interval={1000}>
          <img src={img1} alt="First slide" className="carousel-img" />
          <Carousel.Caption>
            <h3 className="animated-text heading">MANAGE THE TASK <br />AS AN EXPERT</h3>
            <p className="animated-text">All kinds of task you can add  you want . </p>
            <button className='btn btn-success'>Learn more<FaArrowRight></FaArrowRight></button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={img2} alt="Second slide" className="carousel-img" />
          <Carousel.Caption>
            <h3 className="animated-text heading">MAKE THE BEST TASK  <br />FOR FREASHER</h3>
            <p className="animated-text">Make more interesting task for learner for helping to improve their skill.</p>
            <button className='btn btn-success'>Learn more<FaArrowRight></FaArrowRight></button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} alt="Third slide" className="carousel-img" />
          <Carousel.Caption>
            <h3 className="animated-text heading">UPDATE THE TASK <br />YOU WANT </h3>
            <p className="animated-text">Update the task every time you want to update it .</p>
            <button className='btn btn-success p-2'>Learn more<FaArrowRight></FaArrowRight></button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;


