import React from 'react';
import {Carousel} from 'react-bootstrap';
import Assets from '../constants/Image'

export default function Slideimages(){
    return(
        <div><Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Assets.CHAIR_IMAGE}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          />
      
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
      
          
        </Carousel.Item>
      </Carousel></div>
        
    );
}