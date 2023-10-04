import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Avatar = ({ seed, onClick }) => {
  return (
    <div
      className={`w-16 h-16 flex-shrink-0 relative ${
        onClick ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
    >
      <img
        src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}`}
        className="z-10 relative"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
      </div>
    </div>
  );
};

Avatar.propTypes = {
  seed: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

// Export the component as the default export
export default Avatar;
