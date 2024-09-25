import React from "react";
import { FixedSizeList as List } from "react-window"; // Import react-window for virtualization
import { IMG_URL } from "../Utils/constants";

const ItemList = ({ items }) => {
  // Row component for each item, receives an index and style from react-window
  const Row = ({ index, style }) => {
    const item = items[index]; // Access the item based on the index

    return (
      <div
        key={item.card.info.id}
        className="border-b border-gray-200 text-left px-2 py-4 flex justify-between items-start"
        style={style} // Apply the style provided by react-window
      >
        <div>
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <br />
            <span>₹{item.card.info.price / 100}</span>
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
            <button className="p-2 bg-white shadow-lg font-bold rounded-lg hover:bg-gray-300 text-green-700">
              Add +
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <List
      height={500}             // Height of the list container (adjust as needed)
      itemCount={items.length}  // Total number of items
      itemSize={120}            // Fixed height of each row (adjust based on design)
      width={"100%"}            // Full width of the container
    >
      {Row}                     // Render each item using the Row component
    </List>
  );
};

export default ItemList;
