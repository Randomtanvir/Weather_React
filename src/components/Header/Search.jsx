import { useContext, useEffect, useRef } from "react";
import SearchIcom from "../../assets/search.svg";
import { LocationContex } from "../../contex";
import { getLocationByName } from "./../../data/Location_data";
import useDebounce from "../../hooks/useDebounce";
const Search = () => {
  const { setSelectedLocation } = useContext(LocationContex);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const doSearch = useDebounce((searchText) => {
    const fetchLocation = getLocationByName(searchText);
    setSelectedLocation({ ...fetchLocation });
  }, 2000);

  const handelChange = (event) => {
    const value = event.target.value;
    doSearch(value);
  };
  return (
    <form>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          ref={inputRef}
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={handelChange}
          required
        />

        <img src={SearchIcom} />
      </div>
    </form>
  );
};

export default Search;
