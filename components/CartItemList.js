import React from "react";
import { IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const CartItemList = ({ items }) => {
  const dispatch = useDispatch();
  // stopped the closing of the accordion when clicked on add button using stopPropagation()
  const handleAddItem = (event, item) => {
    event.stopPropagation();
    dispatch(addItem(item));
  };
  return (
    // stopped the closing of the accordion when clicked on any item of the list using stopPropagation()
    <div onClick={(event) => event.stopPropagation()}>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b border-gray-200 text-left px-2 py-4 flex justify-between items-start"
        >
          <div>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <br />
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="relative w-3/12">
            <img
              src={IMG_URL + item.card.info.imageId}
              className="rounded-lg w-full"
              alt={item.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
