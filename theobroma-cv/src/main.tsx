import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import AppContainer from '@routes/AppContainer';
import AppThemeProvider from '@themes/theme';

// Open Source fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
