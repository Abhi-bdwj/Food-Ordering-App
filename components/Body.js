import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]); // Original list
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // Filtered list
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9141069&lng=78.1535928&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!data.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await data.json();
      console.log(json);

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setRestaurantList(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const searchHandler = () => {
    const filteredList = restaurantList.filter(
      (res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
        res.info.cuisines.some((cuisine) =>
          cuisine.toLowerCase().includes(searchText.toLowerCase())
        )
    );
    setFilteredRestaurants(filteredList);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchHandler();
    }
  };

  const filterTopRated = () => {
    const filteredList = restaurantList.filter((res) => res.info.avgRating > 4);
    setFilteredRestaurants(filteredList);
  };

  const resetFilters = () => {
    setSearchText("");
    setFilteredRestaurants(restaurantList);
  };

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search food or restaurant"
            value={searchText}
            onChange={handleSearchTextChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={searchHandler}>Search</button>
          <button onClick={resetFilters}>Reset</button>
        </div>
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
         <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurantCard  resList={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
