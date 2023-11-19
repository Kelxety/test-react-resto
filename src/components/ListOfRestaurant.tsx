import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { Restaurant } from "../utils/interface/Restaurant";
import RestoCard from "./RestoCard";

const ListOfRestaurant = () => {
  const [categorizedRestaurants, setCategorizedRestaurants] = useState<{
    [category: string]: string[];
  }>({});

  useEffect(() => {
    const fetchdata = async () => {
      const filteredByState: {
        [state: string]: string[];
      } = {};

      const response = await axios.get("/api/restaurants");
      if (response.status === 200) {
        response.data.forEach((resto: Restaurant) => {
          const state = resto.state;
          const restaurantName = resto.restaurant_name;

          if (!filteredByState[state]) {
            filteredByState[state] = [];
          }
          filteredByState[state].push(restaurantName);
        });
        setCategorizedRestaurants(filteredByState);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      <h1 className="mb-12 my-2">List of Categorized Restaurants</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {Object.keys(categorizedRestaurants).map((resto, i) => (
          <Suspense key={i} fallback={<div>Loading...</div>}>
            <RestoCard
              resto={resto}
              key={i}
              categorizedRestaurants={categorizedRestaurants}
            />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default ListOfRestaurant;
