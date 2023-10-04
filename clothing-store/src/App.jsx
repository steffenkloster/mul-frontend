import "./App.css";
import { useState } from "react";
import clothing from "./assets/clothing.json";
import ClothingGrid from "./components/ClothingGrid";
import DisplayItem from "./components/DisplayItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import BasketItem from "./components/BasketItem";

function App() {
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentItem, setCurrentItem] = useState({});
  const [currentCart, setCurrentCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const categories = [...new Set(clothing.map((item) => item.category))];

  const changeCategory = (category) => {
    setCurrentCategory(category);
    setCurrentItem({});
  };

  const addToCart = (itemId, color, size, amount) => {
    const newCart = [...currentCart];
    const existingItem = newCart.find(
      (item) => item.id == itemId && item.size == size && item.color == color
    );
    if (existingItem !== undefined) {
      existingItem.amount += amount;
      if (existingItem.amount > 99) {
        existingItem.amount = 99;
      }

      setCurrentCart([...newCart]);
    } else {
      setCurrentCart([
        ...newCart,
        {
          id: itemId,
          size,
          color,
          amount,
        },
      ]);
    }
  };

  const removeFromCart = (itemId, color, size) => {
    const newCart = [...currentCart].filter(
      (item) => !(item.id == itemId && item.size == size && item.color == color)
    );
    setCurrentCart(newCart);
  };

  return (
    <main>
      <div className="max-w-screen-lg mx-auto flex flex-col gap-y-4">
        <h1
          className="text-5xl text-center relative cursor-pointer"
          onClick={(e) => {
            if (e.target.tagName !== "H1") {
              return;
            }

            setCurrentItem({});
          }}
        >
          Fashion Frenzy
          <div
            className="absolute bottom-0 right-0 text-xl cursor-pointer"
            onClick={() => setCartVisible(!cartVisible)}
          >
            {currentCart.length} {currentCart.length == 1 ? "item" : "items"}{" "}
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </h1>
        <hr />
        <ul className="categories">
          <li onClick={() => changeCategory("")}>Home</li>
          {categories.map((category) => (
            <li onClick={() => changeCategory(category)} key={category}>
              {category}
            </li>
          ))}
        </ul>
        <hr />
        {Object.keys(currentItem).length == 0 ? (
          <ClothingGrid
            items={clothing}
            currentCategory={currentCategory}
            setCurrentItem={setCurrentItem}
          />
        ) : (
          <DisplayItem
            item={currentItem}
            addToCart={addToCart}
            setCurrentItem={setCurrentItem}
          />
        )}
      </div>
      <div
        className={`w-72 h-screen fixed -right-72 top-0 border-l p-4 flex flex-col gap-2 transition-all duration-300 ${
          cartVisible ? "!right-0" : ""
        }`}
      >
        <div className="flex flex-col gap-2 overflow-scroll flex-grow">
          {currentCart.map((cartItem, i) => {
            const clothingItem = clothing.find(
              (item) => item.id == cartItem.id
            );
            return (
              <BasketItem
                key={`basket-${i}`}
                item={clothingItem}
                amount={cartItem.amount}
                size={cartItem.size}
                color={cartItem.color}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>
        <div className="h-32 flex-shrink-0 flex flex-col gap-2">
          <button
            type="button"
            className="uppercasse h-full w-full bg-green-100 hover:bg-green-200"
          >
            Checkout
          </button>
          <button type="button" onClick={() => setCartVisible(false)}>
            Close window
          </button>
        </div>
      </div>
      <hr />
      <div className="pt-4 text-center">
        <a href="https://steffen.codes/" target="_blank" rel="noreferrer">
          © steffen.codes
        </a>
      </div>
    </main>
  );
}

export default App;
