import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import ZoomableImage from "./ZoomableImage";

const DisplayItem = ({ item, addToCart, setCurrentItem }) => {
  const { id, price, model, description, sizes, colors } = item;

  const [error, setError] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [amount, setAmount] = useState(1);

  const handleChange = (event) => {
    const { target } = event;
    const amount = parseInt(target.value);

    setAmount(amount >= 1 ? (amount < 100 ? amount : 99) : 1);
  };

  const handleClick = () => {
    if (selectedSize == "") {
      setError("You need to select a size.");
      return;
    }

    if (selectedColor == "") {
      setError("You need to select a color.");
      return;
    }

    addToCart(item.id, selectedColor, selectedSize, amount);
  };

  return (
    <div className="flex gap-6">
      {/* <div className="h-96 w-96 flex-shrink-0">
        <img src={`/clothing-images/${id}.jpeg`} />
      </div> */}
      <ZoomableImage id={id} />
      <div className="flex flex-col gap-y-4 w-full">
        <div
          className="uppercase cursor-pointer"
          onClick={() => setCurrentItem({})}
        >
          Go back ..
        </div>
        <hr />
        <h2 className="text-4xl">{model}</h2>
        <p>{description}</p>
        <div>
          <div className="uppercase font-medium tracking-widest mb-1">Size</div>
          <ul className="options">
            {sizes.map((size) => (
              <li
                key={`item-${id}-${size}`}
                className={selectedSize == size ? "selected" : ""}
                onClick={() => {
                  setSelectedSize(size);
                  setError("");
                }}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="uppercase font-medium tracking-widest mb-1">
            Colors
          </div>
          <ul className="options">
            {colors.map((color) => (
              <li
                key={`item-${id}-${color}`}
                className={selectedColor == color ? "selected" : ""}
                onClick={() => {
                  setSelectedColor(color);
                  setError("");
                }}
              >
                {color}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-lg">
          € <span className="text-3xl">{price}</span>
        </div>
        <div className="flex gap-x-2">
          <input type="number" value={amount} onChange={handleChange} />
          <button type="button" onClick={handleClick}>
            <FontAwesomeIcon icon={faCartPlus} /> Add to cart
          </button>
        </div>
        {error !== "" && <div className="text-red-600">{error}</div>}
      </div>
    </div>
  );
};

DisplayItem.propTypes = {
  item: PropTypes.object,
  addToCart: PropTypes.func,
  setCurrentItem: PropTypes.func,
};

export default DisplayItem;
