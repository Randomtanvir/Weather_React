import Heart from "../../assets/heart.svg";
import HeartRed from "../../assets/heart-red.svg";
import { useContext, useEffect, useState } from "react";
import { FavoriteContex, WeatherContex } from "../../contex";

const AddToFavorite = () => {
  const { addToFavorite, removeFromFavorite, favorite } =
    useContext(FavoriteContex);
  const { weatherData } = useContext(WeatherContex);
  const [favoriteToggle, setFavoriteToggle] = useState(false);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const find = favorite.find((f) => {
      return f.location === location;
    });
    setFavoriteToggle(find);
  }, [favorite, location]);

  const handleFavourites = () => {
    const find = favorite.find((f) => {
      return f.location === location;
    });

    if (!find) {
      addToFavorite(latitude, longitude, location);
    } else {
      removeFromFavorite(location);
    }
    setFavoriteToggle(!favoriteToggle);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavourites}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={favoriteToggle ? HeartRed : Heart} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavorite;
