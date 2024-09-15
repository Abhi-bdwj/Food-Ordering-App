import React from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards
      ?.find((card) =>
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.some(
          (innerCard) => innerCard?.card?.card?.itemCards
        )
      )
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
        (innerCard) => innerCard?.card?.card?.itemCards
      )?.card?.card?.itemCards || [];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Restaurant Info */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-lg text-gray-600">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>

      {/* Menu Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Menu</h2>
        <h3 className="text-xl font-medium mb-2">Recommended</h3>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <ul className="space-y-4">
            {itemCards.length > 0 ? (
              itemCards.map((item) => (
                <li
                  key={item.card.info.id}
                  className="border-b border-gray-300 pb-2  flex"
                >
                  <span className="font-medium">{item.card.info.name}</span> -
                  {"Rs"} {item.card.info.price / 100} 
                  <button className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-700 self-end">
                    Add
                  </button>
                </li>
              ))
            ) : (
              <li className="text-gray-500">No items available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
