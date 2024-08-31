import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://gkpb.com.br/wp-content/uploads/2024/08/festival-petit-gateau-giraffas-gkpb-banner.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.shoppingcostadourada.com.br/files/store/16735475432099-giraffas.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://visitebrasilia.com.br/media/plg_jspeed/cache/images/8ceb28768ddc3c2bb5b7fb00057da14fea3e3a2f.webp"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
