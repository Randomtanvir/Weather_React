import Heading from "../components/Header/Heading";
import WeatherBoard from "../components/Weather/WeatherBoard";

const HomePage = () => {
  return (
    <div className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
      <Heading />
      <WeatherBoard />
    </div>
  );
};

export default HomePage;
