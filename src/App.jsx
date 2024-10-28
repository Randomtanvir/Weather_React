import HomePage from "./page/HomePage";
import { WeatherProvider } from "./provider/index";

const App = () => {
  return (
    <WeatherProvider>
      <HomePage />
    </WeatherProvider>
  );
};

export default App;
