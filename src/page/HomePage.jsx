import Heading from "../components/Header/Heading";
import WeatherBoard from "../components/Weather/WeatherBoard";
import useWeather from "./../hooks/useWeather";

import ClearSkyImage from "../assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "../assets/backgrounds/few-clouds.jpg";
import MistImage from "../assets/backgrounds/mist.jpeg";
import RainyDayImage from "../assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "../assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "../assets/backgrounds/sunny.jpg";
import ThunderStormImage from "../assets/backgrounds/thunderstorm.jpg";
import WinterImage from "../assets/backgrounds/winter.jpg";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { loading, weatherData } = useWeather();
  const [climateImg, setClimateImg] = useState("");

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatterdCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  }
  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImg(bgImage);
  }, [weatherData.climate]);

  return (
    <div
      style={{ backgroundImage: `url(${climateImg})` }}
      className="bg-body font-[Roboto] text-light bg-no-repeat bg-cover h-screen grid place-items-center"
    >
      {loading.state ? (
        <div>
          <p>{loading.message}</p>
        </div>
      ) : (
        <>
          <Heading />
          <WeatherBoard />
        </>
      )}
    </div>
  );
};

export default HomePage;
