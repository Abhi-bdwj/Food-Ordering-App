import React from "react";

const CartItemList = ({ items }) => {
  // Created a map to count item occurrences
  const itemCountMap = {};

  // Traverse through items to count each item's occurrence
  items.forEach((item) => {
    const itemId = item.card.info.id;
    if (itemCountMap[itemId]) {
      itemCountMap[itemId] += 1; // If item already exists, increment the counter
    } else {
      itemCountMap[itemId] = 1; // If item doesn't exist, initialize with 1
    }
  });

  // Get unique items by filtering out duplicates  
  // finding the first index of item from items[] by checking the condition where id of the item from items[] is equal to the id of the current item in items[] from filter function.
  const uniqueItems = items.filter(
    (item, index, self) =>
      index === self.findIndex((i) => i.card.info.id === item.card.info.id)
  );

  const totalAmount = uniqueItems.reduce((total, item) => {
    const price = item.card.info.price || item.card.info.defaultPrice;

    return total + (price / 100) * itemCountMap[item.card.info.id];
  }, 0);

  return (
    <div>
      {uniqueItems.map((item) => (
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
          </div>
          <div className="p-4">
            {/* Display the counted quantity */}
            <span className="font-semibold">
              Qty: {itemCountMap[item.card.info.id]}
            </span>
          </div>
        </div>
      ))}
      {/*show total amount*/}
      {uniqueItems.length > 0 ? (
        <div className="flex justify-between p-2">
          <h1 className="font-bold font-serif text-red-600">Total Amount:</h1>
          <span className="pr-5 text-bold font-bold text-red-600">
            {totalAmount}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default CartItemList;
