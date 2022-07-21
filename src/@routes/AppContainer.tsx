// usually many routes here
import React from 'react';
import SmoothScroll from 'smooth-scroll';
import MainView from '../@views/MainView';
import { AppLayout } from './AppLayout';

export const scroll = new SmoothScroll('a[href*="#"]', {
  header: '.MuiAppBar-positionFixed', // Selector for fixed headers (must be a valid CSS selector)
  offset: 30, // header option not so good on mobile as i wish
  topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"
  speed: 1000,
  speedAsDuration: true,
});

export const AppContainer = () => {
  return (
    <AppLayout>
      <MainView />
    </AppLayout>
  );
};
