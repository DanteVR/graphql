import React from 'react';
import ContentView, { MainScreenProps } from '../../layouts/main';

export const MainScreen = (props: MainScreenProps): React.ReactElement => {
  return <ContentView {...props} />;
};
