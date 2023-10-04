import PropTypes from "prop-types";
import ClothingItem from "./ClothingItem";

const ClothingGrid = ({ items, currentCategory, setCurrentItem }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {items
        .filter(
          (item) => currentCategory == "" || item.category == currentCategory
        )
        .map((item) => {
          return (
            <ClothingItem
              key={`clothing-${item.id}`}
              item={item}
              setCurrentItem={setCurrentItem}
            />
          );
        })}
    </div>
  );
};

ClothingGrid.propTypes = {
  items: PropTypes.array,
  currentCategory: PropTypes.string,
  setCurrentItem: PropTypes.func,
};

export default ClothingGrid;
