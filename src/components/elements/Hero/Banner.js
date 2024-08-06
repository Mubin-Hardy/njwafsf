import Image from 'next/image';
import PropTypes from 'prop-types';
//TODO blend mode overlay as per design
//[x] responsive fix
export const Banner = ({ imageURL, heroTitle, subtitle, style }) => {
  return (
    <div className="w-full h-[675px] mx-auto relative">
      <Image className={`z-0 ${style}`} src={imageURL} alt={heroTitle} fill />
      <div className="z-10 relative max-w-7xl xl:mx-auto py-44 mx-4">
        {heroTitle && (
          <h1 className="font-manrope text-5xl max-w-md leading-[68px] font-bold text-left text-white">
            {heroTitle}
          </h1>
        )}
        {subtitle && (
          <p className="font-inter mt-6 text-lg leading-8 text-left text-white">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

Banner.propTypes = {
  imageURL: PropTypes.string.isRequired,
  heroTitle: PropTypes.string,
  subtitle: PropTypes.string,
  style: PropTypes.string,
};

Banner.defaultProps = {
  imageURL:
    'https://images.unsplash.com/photo-1445364030979-677898992bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1079&q=80',
  heroTitle: 'Building a travel community',
  subtitle: 'You are only limited by your imagination.',
  style: 'object-cover',
};
