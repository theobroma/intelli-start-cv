import { RootState } from '..';

export const forecastSelector = (state: RootState) => {
  return state.forecast;
};

export const forecastdaySelector = (state: RootState) => {
  return state.forecast.forecast.forecastday;
};