import React from 'react';
import { useSelector } from 'react-redux';

import type { PaletteType } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import { themeSelector } from '../@store/ui/selectors';

/**
 * Material UI theme "front" colors, "back" colors are different for Light and Dark modes
 */
const FRONT_COLORS = {
  info: {
    main: '#0277bd', // Light Blue 800
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#2e7d32', // Green 800
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#f9a825', // Yellow 800
    contrastText: '#FFFFFF',
  },
  error: {
    main: '#c62828', // Red 800
    contrastText: '#FFFFFF',
  },
};

const LIGHT_THEME = {
  palette: {
    type: 'light' as PaletteType,
    background: {
      paper: '#f5f5f5',
      default: '#FFFFFF',
    },
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    ...FRONT_COLORS,
  },
};

const DARK_THEME = {
  palette: {
    type: 'dark' as PaletteType,
    background: {
      paper: '#424242',
      default: '#303030',
    },
    primary: {
      main: '#81c784',
      contrastText: '#000000',
    },
    secondary: {
      main: '#ffb74d',
      contrastText: '#000',
    },
    ...FRONT_COLORS,
  },
};

const DEEP_PURPLE_AMBER_THEME = {
  palette: {
    type: 'light' as PaletteType,
    background: {
      paper: '#f5f5f5',
      default: '#FFFFFF',
    },
    primary: {
      main: '#673ab7',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffd740',
      contrastText: '#000',
    },
    ...FRONT_COLORS,
  },
};

const PINK_BLUE_GREY_THEME = {
  palette: {
    type: 'dark' as PaletteType,
    background: {
      paper: '#424242',
      default: '#303030',
    },
    primary: {
      main: '#e91e63;',
      contrastText: '#000000',
    },
    secondary: {
      main: '#607d8b;',
      contrastText: '#000',
    },
    ...FRONT_COLORS,
  },
};

const themeMap = {
  light: LIGHT_THEME,
  dark: DARK_THEME,
  deepPurpleAmber: DEEP_PURPLE_AMBER_THEME,
  pinkBlueGrey: PINK_BLUE_GREY_THEME,
};

const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const currentTheme = useSelector(themeSelector);
  const theme = createTheme(themeMap[currentTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
