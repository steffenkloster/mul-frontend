import { useState } from "react";
import PropTypes from "prop-types";

const ExpandingTextarea = ({ className, value, onChange, key }) => {
  const [text, setText] = useState(value);
  const [height, setHeight] = useState("auto");

  const handleTextChange = (event) => {
    const textareaLineHeight = 24; // Adjust this value according to your textarea's line-height
    const previousScrollHeight = event.target.scrollHeight;
    event.target.style.height = "auto"; // Reset height to 'auto'
    event.target.style.height = `${Math.max(
      event.target.scrollHeight,
      textareaLineHeight
    )}px`;

    setText(event.target.value);
    setHeight(
      previousScrollHeight > event.target.scrollHeight
        ? previousScrollHeight
        : event.target.scrollHeight
    );

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <textarea
      key={key}
      style={{ height }}
      value={text}
      className={className}
      placeholder="Hvad har du på hjertet?"
      onChange={handleTextChange}
    />
  );
};

ExpandingTextarea.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  key: PropTypes.string.isRequired,
};

export default ExpandingTextarea;
