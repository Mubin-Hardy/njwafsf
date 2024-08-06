// Import Swiper React components
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/lazy';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { Lazy, Navigation, Pagination } from 'swiper';

export const ImageSlider = ({ className, srcObject, handleModalClose }) => {
  return (
    <Swiper
      className={className}
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      lazy={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Lazy, Pagination, Navigation]}
    >
      <button
        className="absolute top-4 right-4 z-10"
        onClick={handleModalClose}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
            fill="currentColor"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
      {srcObject.map((item) => {
        return (
          <SwiperSlide className="relative w-full h-full " key={uuidv4()}>
            <Image
              src={item.src}
              className="object-center object-cover"
              alt={item.alt}
              fill
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

ImageSlider.propTypes = {
  className: PropTypes.string,
  srcObject: PropTypes.array,
  handleModalClose: PropTypes.func,
};

ImageSlider.defaultProps = {
  className: 'w-[500px] h-[500px]',
  srcObject: [
    {
      src: 'https://images.unsplash.com/photo-1675458884693-9322658334d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      style: 'object-cover rounded-l-lg',
      alt: 'image',
    },
    {
      src: 'https://images.unsplash.com/photo-1675458884693-9322658334d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      style: 'object-cover rounded-l-lg',
      alt: 'image',
    },
  ],
  handleModalClose: () => {
    console.log('handleModalClose');
  },
};
