import React, { useEffect } from "react";
import { useState } from "react";
import SearchIcon from "./customicons/SearchIcon";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/constants/action-types";
import {
  getNewsError,
  getNewsSuccess,
  getRecreationError,
  getRecreationSuccess,
  getWeatherError,
  getWeatherSuccess,
} from "../redux/actions/actionFunctions";
import { useNavigate } from "react-router";

function SearchBar() {
  const [userDestination, setUserDestination] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDestination("");
    navigate("/weather");
  };
  const weatherKey = "0c9c9e2407f1a94c5c8cf77596a04d49";
  useEffect(() => {
    if (userDestination.length > 4) {
      dispatch({
        type: ActionTypes.DESTINATION_NAME,
        payload: userDestination,
      });
      const myWeather = async (dispatch) => {
        dispatch({ type: ActionTypes.FETCH_DATA_START });
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${userDestination}&appid=${weatherKey}`
          );

          dispatch(getWeatherSuccess(response?.data));

          console.log(response);
        } catch (error) {
          dispatch(getWeatherError(error.message));
          console.log(error.message);
        }
      };

      const myNews = async (dispatch) => {
        dispatch({ type: ActionTypes.FETCH_DATA_START });
        try {
          const response = await axios.get(
            `https://newsdata.io/api/1/news?apikey=pub_485704ff05edfdaadd7c5c5cc82ec1222110&q=${userDestination}`
          );

          dispatch(getNewsSuccess(response?.data.results));

          console.log(response);
        } catch (error) {
          dispatch(getNewsError(error.message));
        }
      };

      const recreationalURL = `https://travel-advisor.p.rapidapi.com/locations/search`;

      const options = {
        params: {
          query: userDestination,
          limit: "30",
          offset: "0",
          units: "km",
          location_id: "1",
          currency: "USD",
          sort: "relevance",
          lang: "en_US",
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "27373532bbmsh2cb6f90e496eb8dp16df81jsn642c4f59d8ae",
        },
      };
      const myAttractions = async (dispatch) => {
        dispatch({ type: ActionTypes.FETCH_DATA_START });
        try {
          const response = await axios.get(recreationalURL, options);
          dispatch(getRecreationSuccess(response?.data.data));
          console.log(response);
        } catch (error) {
          dispatch(getRecreationError(error.message));
          console.log(error.message);
        }
      };

      dispatch(myWeather);
      dispatch(myNews);
      dispatch(myAttractions);
    }
  }, [userDestination, dispatch]);

  return (
    <div className='search-nav'>
      <form onSubmit={handleSubmit}>
        <input
          className='search-nav-input'
          type='text'
          id='search'
          onChange={(e) => setUserDestination(e.target.value)}
          placeholder='Where are you travelling to?'
          value={userDestination}
        />

        <span className='search-icon'>
          {" "}
          <SearchIcon />
        </span>
      </form>
    </div>
  );
}

export default SearchBar;
