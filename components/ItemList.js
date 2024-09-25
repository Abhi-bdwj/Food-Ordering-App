import React from "react";
import { IMG_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import {addItem} from "../Utils/cartSlice"; 

const ItemList = ({ items }) => {

  const dispatch = useDispatch()
  // stopped the closing of the accordion when clicked on add button using stopPropagation()
  const handleAddItem = (event) => {
    event.stopPropagation()
    dispatch(addItem())
  }
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
              <span>₹{item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="relative w-3/12">
            <img
              src={IMG_URL + item.card.info.imageId}
              className="rounded-lg w-full"
              alt={item.card.info.name}
            />
            <div className="absolute inset-x-0 bottom-0 flex justify-center">
              <button  onClick={handleAddItem} className="p-2 bg-white shadow-lg font-bold rounded-lg hover:bg-gray-300 text-green-700">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
