/* eslint-disable react/prop-types */

import { FavoriteContex } from "../contex";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useLocalStorage("Favorite", []);

  const addToFavorite = (latitude, longitude, location) => {
    setFavorite([
      ...favorite,
      { latitude: latitude, longitude: longitude, location: location },
    ]);
  };
  const removeFromFavorite = (location) => {
    const restFavorite = favorite.filter((v) => {
      return v.location !== location;
    });

    setFavorite(restFavorite);
  };
  return (
    <FavoriteContex.Provider
      value={{ favorite, addToFavorite, removeFromFavorite }}
    >
      {children}
    </FavoriteContex.Provider>
  );
};

export default FavoriteProvider;
