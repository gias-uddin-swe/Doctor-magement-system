import React from 'react';
import { Carousel } from 'react-bootstrap';
import doctor1 from '../../../images/doctor/dcotor1.png';
import doctor2 from '../../../images/doctor/doctor2.png';
import doctor3 from '../../../images/doctor/doctor4.jpg';
import './DoctorCarousel.css';

const DoctorCarousel = () => {
    return (
        <div className="container doctor-carousel-container">
            <h1 className="mb-5">Our Popular doctors</h1>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block doctor-carousel-image"
      src={doctor1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block doctor-carousel-image"
      src={doctor2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block doctor-carousel-image"
      src={doctor3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default DoctorCarousel;