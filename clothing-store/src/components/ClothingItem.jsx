import PropTypes from "prop-types";

const ClothingItem = ({ item, setCurrentItem }) => {
  const { id, price, model } = item;
  return (
    <div
      className="flex flex-col gap-y-2 cursor-pointer"
      onClick={() => setCurrentItem(item)}
    >
      <img src={`/clothing-images/${id}.jpeg`} />
      <div>
        <div>{model}</div>
        <div>
          € <span className="text-xl">{price}</span>
        </div>
      </div>
    </div>
  );
};

ClothingItem.propTypes = {
  item: PropTypes.object,
  setCurrentItem: PropTypes.func,
};

export default ClothingItem;
