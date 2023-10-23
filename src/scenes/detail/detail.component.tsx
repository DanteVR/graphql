import React from 'react';
import ContentView, { DetailScreenProps } from '../../layouts/detail';

export const DetailScreen = (props: DetailScreenProps): React.ReactElement => {
  return <ContentView {...props} />;
};
