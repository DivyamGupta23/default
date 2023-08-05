import React from 'react';
import Slider from 'react-slick';

const TextSlider = () => {
  const slides = [
    {
      heading: 'The Goal',
      text:
        ' The platform believes in unlocking every student s potential for greatness in the world of  technology',
    },
    {
      heading: 'The Platform',
      text: 'Education meets opportunity at InternNexus, shaping a future filled with endless possibilities.',
    },
    {
      heading: 'The Journey',
      text:
        'Embark on your transformative tech course journey with InternNexus today to explore exciting opportunities for a bright and successful future.',
    },
    // Add more slides if needed
  ];

  const settings = {

    infinite: true,
    speed: 500,
    autoplay: true, // Auto-slide enabled
    autoplaySpeed: 1500, // Slide every 5 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h1>{slide.heading}</h1>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TextSlider;
