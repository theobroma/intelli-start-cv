import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'tailwindcss/tailwind.css';
import './index.css';

import AppContainer from '@routes/AppContainer';
import AppThemeProvider from '@themes/theme';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <AppThemeProvider>
        {/* <SnackBarProvider> */}
        <AppContainer />
        {/* </SnackBarProvider> */}
      </AppThemeProvider>
    </StrictMode>
  );
}
