import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SlideshowContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  width: 40%;
`;

const PlaceholderImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ImageSlideshow = () => {
  return (
    <SlideshowContainer>
      <Carousel showThumbs={false}>
        <div>
          <PlaceholderImage src="https://via.placeholder.com/300x200" alt="Slide 1" />
        </div>
        <div>
          <PlaceholderImage src="https://via.placeholder.com/300x200" alt="Slide 2" />
        </div>
        <div>
          <PlaceholderImage src="https://via.placeholder.com/300x200" alt="Slide 3" />
        </div>
      </Carousel>
    </SlideshowContainer>
  );
};

export default ImageSlideshow;
