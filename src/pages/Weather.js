import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import attraction1 from "../assets/attraction1.png";
import arrow from "../assets/arrow.png";

function Weather() {
  const destinationName = useSelector((state) => state.destinationName);
  const destinationWeather = useSelector((state) => state.travelWeatherData);
  const newsInfo = useSelector((state) => state.travelNewsData);
  const attractionInfo = useSelector((state) => state.travelRecreationalData);
  // const error = useSelector((state) => state.error);
  // const isError = useSelector((state) => state.isError);
  // const isLoading = useSelector((state) => state.isLoading);

  console.log(attractionInfo);

  return (
    <div className='weather-section'>
      <div className='main-hero'>
        <div className='main-hero-title'>
          <h1>Travel to {destinationName ? destinationName : "London"}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            quidem amet in libero odio aperiam labore eligendi. Iure vel tenetur
            odio, magni quidem ut enim at sit laudantium reprehenderit alias
            tempora id illum cupiditate quae.
          </p>
        </div>
        <div className='temperature-info'>
          <div className='stats'>
            <p>Temp:</p>
            <span className='weather-numbers'>
              {destinationWeather?.main?.temp}
              <span className='unit'>
                <sup>ºC</sup>
              </span>
            </span>
          </div>
          <div className='stats'>
            <p>Wind Speed:</p>
            <span className='weather-numbers'>
              {destinationWeather?.wind?.speed}
              <span className='unit'>
                <sup>Km/s</sup>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className='weather-update'>
        <h3 className='weather-title'>
          Latest News in{" "}
          <span className='destination-title'>{destinationName}</span>
        </h3>

        <div className='card-wrapper'>
          {newsInfo?.slice(0, 8).map((news, index) => {
            return (
              <Link to={`/weather/news/${news.title} `} key={index}>
                <div className='weather-card'>
                  <img
                    src={
                      news?.image
                        ? news.image
                        : "https://namagic.com/wp-content/uploads/2020/10/news.jpg"
                    }
                    alt='random'
                    className='random'
                  />
                  <div className='weather-content'>
                    <h4>{news?.title.slice(0, 40)}...</h4>
                    <p>{news?.description.slice(0, 35)}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className='attraction-section'>
        <h3 className='attraction-title'>
          Nice Attractions In{" "}
          <span className='destination-title'> {destinationName}</span>{" "}
          <span className='arrow'>
            <img src={arrow} alt='of' />
          </span>
        </h3>
        <div className='attractions'>
          {attractionInfo?.slice(0, 16).map((item, index) => {
            return (
              <div className='attractions-card' key={index}>
                <img
                  src={
                    item?.result_object?.photo?.images?.original?.url
                      ? item.result_object.photo.images.original.url
                      : attraction1
                  }
                  alt='attraction'
                />
                <p className='attraction-text'>
                  {item?.result_object?.name
                    ? item.result_object.name
                    : ` A location in ${destinationName}`}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Weather;
