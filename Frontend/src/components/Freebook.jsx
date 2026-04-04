import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../assets/list.json"; 
import Cards from './Cards';

function Freebook() {
  // 1. Data handling
  const dataArray = list.default || list;
  const filterData = Array.isArray(dataArray) ? dataArray.filter((d) => d.category === "Free") : [];

  // 2. IMPORTANT: THE SLIDER FIX
  // If Slider is an object, we grab the .default property.
  // This is why you were getting the "expected function but got object" error.
  const ActualSlider = (typeof Slider === 'object' && Slider.default) ? Slider.default : Slider;

  console.log("Type of ActualSlider:", typeof ActualSlider); // This MUST be 'function'

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
        <h1 className='text-xl font-semibold pb-2'>Free Offered Course</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime cum sequi obcaecati? Modi, fuga.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla maxime cum sequi obcaecati? Modi, fuga.</p>
      </div>

      <div>
        {/* We use ActualSlider here instead of Slider */}
        {typeof ActualSlider === 'function' ? (
          <ActualSlider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id}/>
            ))}
          </ActualSlider>
        ) : (
          <div className="text-red-500">
            Internal Error: Slider is still an object. Check console.
          </div>
        )}
      </div>
    </div>
  );
}

export default Freebook;