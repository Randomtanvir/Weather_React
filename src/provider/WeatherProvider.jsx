/* eslint-disable react/prop-types */
import { WeatherContex } from "../contex";
import useWeather from "../hooks/useWeather";

const WeatherProvider = ({ children }) => {
  const { weatherData, loading, weatherError } = useWeather();
  return (
    <WeatherContex.Provider value={{ weatherData, loading, weatherError }}>
      {children}
    </WeatherContex.Provider>
  );
};

export default WeatherProvider;
