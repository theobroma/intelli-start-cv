import { createSlice } from '@reduxjs/toolkit';
import { ThemeColorsType } from '../../@types';

const projectsInitialState = {
  //   theme: 'light' as ThemeColorsType,
  data: [] as any,
};

export type ProjectsInitialStateType = typeof projectsInitialState;

export const slice = createSlice({
  name: 'projects',
  initialState: projectsInitialState,
  reducers: {
    // setThemeAC(state, action) {
    //   state.theme = action.payload;
    // },
  },
});

export const projectsReducer = slice.reducer;
// export const { setThemeAC } = slice.actions;
