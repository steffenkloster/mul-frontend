import PropTypes from "prop-types";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-sky-500 text-white font-bold px-4 py-2 rounded-full flex-shrink-0 hover:brightness-110 transition-all duration-300 flex gap-x-2 items-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
