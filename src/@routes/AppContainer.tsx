// usually many routes here
import React from 'react';
import SmoothScroll from 'smooth-scroll';
import MainView from '../@views/MainView';
import { AppLayout } from './AppLayout';

export const scroll = new SmoothScroll('a[href*="#"]', {
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
