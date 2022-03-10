import { ActionTypes } from "../constants/action-types";

export const getWeatherSuccess = (data) => ({
  type: ActionTypes.GET_WEATHER,
  payload: data,
});

export const getWeatherError = (error) => ({
  type: ActionTypes.GET_WEATHER_ERROR,
  payload: error,
});

export const getNewsSuccess = (data) => ({
  type: ActionTypes.GET_TRAVEL_NEWS,
  payload: data,
});

export const getNewsError = (error) => ({
  type: ActionTypes.GET_TRAVEL_NEWS_ERROR,
  payload: error,
});

export const getRecreationSuccess = (data) => ({
  type: ActionTypes.GET_RECREATION_CENTRES,
  payload: data,
});

export const getRecreationError = (error) => ({
  type: ActionTypes.GET_RECREATION_CENTRES_ERROR,
  payload: error,
});
