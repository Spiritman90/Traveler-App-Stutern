import { ActionTypes } from "../constants/action-types";

const travelData = {
  travelRecreationalData: [],
  travelNewsData: [],
  destinationName: "",
  travelWeatherData: [],
  isLoading: false,
  error: null,
  isError: false,
};

const reducer = (state = travelData, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.FETCH_DATA_START:
      return { ...state, isLoading: true };

    case ActionTypes.GET_RECREATION_CENTRES:
      return {
        ...state,
        travelRecreationalData: payload,
        isLoading: false,
        isError: false,
        error: null,
      };

    case ActionTypes.GET_RECREATION_CENTRES_ERROR:
      return {
        ...state,
        isError: true,
        error: payload,
        travelRecreationalData: [],
      };
    case ActionTypes.GET_TRAVEL_NEWS:
      return {
        ...state,
        travelNewsData: payload,
        isError: false,
        error: null,
        isLoading: false,
      };

    case ActionTypes.GET_TRAVEL_NEWS_ERROR:
      return {
        ...state,
        isError: true,
        error: payload,
        travelNewsData: [],
      };

    case ActionTypes.GET_WEATHER:
      return {
        ...state,
        travelWeatherData: payload,
        isLoading: false,
        isError: false,
        error: null,
      };

    case ActionTypes.GET_WEATHER_ERROR:
      return {
        ...state,
        isError: true,
        error: payload,
        travelWeatherData: [],
      };

    case ActionTypes.DESTINATION_NAME:
      return { ...state, destinationName: payload };

    default:
      return state;
  }
};

export default reducer;
