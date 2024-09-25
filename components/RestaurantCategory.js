import React, { useRef, useEffect } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const categoryRef = useRef(null); // Create a ref for each accordion

  const accordionHandler = () => {
    setShowIndex(index); // Pass the index of this accordion to the parent
  };

  // Scroll into view when this accordion is opened
  useEffect(() => {
    if (showItems) {
      categoryRef.current.scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start", // Align at the top of the viewport
      });
    }
  }, [showItems]);

  return (
    <div ref={categoryRef}> {/* Attach ref to the div container */}
      <div
        onClick={accordionHandler}
        className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg cursor-pointer"
      >
        {/* Accordion header */}
        <div className="justify-between flex">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>

        {/* Accordion body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
