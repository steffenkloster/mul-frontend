const BasketItem = ({ item, color, size, amount, removeFromCart }) => {
  return (
    <div className="flex gap-2 relative">
      <img src={`/clothing-images/${item.id}.jpeg`} className="w-16 h-16" />
      <div className="flex flex-col">
        <div>{item.model}</div>
        <div className="text-xs">
          Size {size}, {color}
        </div>
        <div className="text-xs">In cart: {amount}</div>
      </div>
      <FontAwesomeIcon
        icon={faXmark}
        className="absolute top-0 right-0 text-red-600 p-1 cursor-pointer"
        onClick={() => removeFromCart(item.id, color, size)}
      />
    </div>
  );
};
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";

BasketItem.propTypes = {
  item: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.string,
  amount: PropTypes.number,
  removeFromCart: PropTypes.func,
};

export default BasketItem;
