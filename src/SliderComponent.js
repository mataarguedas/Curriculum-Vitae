import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faReact, faJsSquare, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <div>
          <FontAwesomeIcon icon={faNodeJs} size="6x" />
        </div>
        <div>
          <FontAwesomeIcon icon={faReact} size="6x" />
        </div>
        <div>
          <FontAwesomeIcon icon={faJsSquare} size="6x" />
        </div>
        <div>
          <FontAwesomeIcon icon={faCss3Alt} size="6x" />
        </div>
        <div>
        <img src=""></img>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
