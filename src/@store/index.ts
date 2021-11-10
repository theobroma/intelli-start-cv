import { combineReducers } from 'redux';
import { сoordinatesReducer } from './сoordinates/slice';
import { forecastReducer } from './forecast/slice';
import { projectsReducer } from './projects/slice';
import { searchReducer } from './search/slice';
import { uiReducer } from './ui/slice';

export const rootReducer = combineReducers({
  сoordinates: сoordinatesReducer,
  forecast: forecastReducer,
  projects: projectsReducer,
  search: searchReducer,
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
