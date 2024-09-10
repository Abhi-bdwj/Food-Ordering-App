import React from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) return <Shimmer />;
  

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

 const itemCards = resInfo?.cards?.find(card => 
    card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.some(innerCard => 
      innerCard?.card?.card?.itemCards
    )
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(innerCard => 
    innerCard?.card?.card?.itemCards
  )?.card?.card?.itemCards || [];
 

  return (
    <div className="menu">
      <h1> {name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h1>Menu</h1>
      <h3>Recommended</h3>
      <div>
        <ul>
          {itemCards?.length > 0 ? (
            itemCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} - {"Rs"} {item.card.info.price / 100}
              </li>
            ))
          ) : (
            <li>No items available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
