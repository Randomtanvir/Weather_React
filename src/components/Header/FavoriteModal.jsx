import { useContext } from "react";
import { FavoriteContex, LocationContex } from "../../contex";

const FavoriteModal = () => {
  const { favorite } = useContext(FavoriteContex);
  const { setSelectedLocation } = useContext(LocationContex);

  const handelLocation = (loc) => {
    console.log(loc);
    setSelectedLocation({ ...loc });
  };
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favorite.length > 0 ? (
          favorite.map((fav, i) => (
            <li key={i} className="hover:bg-gray-200">
              <a onClick={() => handelLocation(fav)}> {fav.location}</a>
            </li>
          ))
        ) : (
          <p>No Favorite Location</p>
        )}
      </ul>
    </div>
  );
};

export default FavoriteModal;
