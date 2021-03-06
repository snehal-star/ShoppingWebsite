import React from 'react';
import '../assets/css/slideimagesstyle.css';
import {Carousel,Image} from 'react-bootstrap';
import Assets from '../constants/Image'

export default function Slideimages(){
    return(
        <div id="forSlideImage"><Carousel className="carousel">
        <Carousel.Item >
          <Image
            className="carouselImage"
            src={Assets.SOFA_IMAGE}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="carouselImage"
            src={Assets.CHAIR_IMAGE}
            alt="Third slide"
          />
      
         
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="carouselImage"
            src={Assets.HALL_IMAGE}
            alt="Third slide"
          />
      
          
        </Carousel.Item>
      </Carousel></div>
        
    );
}