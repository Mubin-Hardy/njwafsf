export const Button = ({ content, clickHandler, className }) => {
  return (
    <button
      className={`text-white bg-BrandRed-500 hover:bg-BrandRed-700 rounded-[4px] py-4 font-semibold transition-colors duration-100 ${className}`}
      onClick={clickHandler}
    >
      {content}
    </button>
  );
};

Button.propTypes = {};

Button.defaultProps = {};
