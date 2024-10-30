import HomePage from "./page/HomePage";
import FavoriteProvider from "./provider/FavoriteProvider";
import { WeatherProvider } from "./provider/index";
import LocationProvider from "./provider/LocationProvider";

const App = () => {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <HomePage />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
};

export default App;
