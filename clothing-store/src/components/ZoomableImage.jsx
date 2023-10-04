import { useState } from "react";
import { PropTypes } from "prop-types";

const ZoomableImage = ({ id }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();

    // Calculate cursor position relative to the container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  const imageStyle = isZoomed
    ? {
        transform: `scale(2)`,
        transformOrigin: `${position.x}px ${position.y}px`,
      }
    : {};

  return (
    <div
      className="h-96 w-96 flex-shrink-0 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        src={`/clothing-images/${id}.jpeg`}
        style={imageStyle}
        className="transition-transform duration-300"
        alt={`Clothing ${id}`}
      />
    </div>
  );
};

ZoomableImage.propTypes = {
  id: PropTypes.number,
};

export default ZoomableImage;
