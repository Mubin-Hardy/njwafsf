// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';

// import required modules
import React from 'react';
import { EffectCreative, Navigation } from 'swiper';

export const StandardsSlider = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className="">
      <Swiper
        className="w-[500px] h-[500px]"
        grabCursor={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative, Navigation]}
      >
        {[...Array(5)].map((item, index) => {
          return (
            <SwiperSlide className={`bg-orange-700 `} key={index + 1}>
              test
            </SwiperSlide>
          );
        })}

        <button ref={navigationPrevRef}>prev</button>
        <button className="text-green-500" ref={navigationNextRef}>
          next
        </button>
      </Swiper>
    </div>
  );
};

StandardsSlider.propTypes = {};

StandardsSlider.defaultProps = {};
