import React from 'react';
import { StatusBar as RNStatusBar, StatusBarProps } from 'react-native';
import { pallette } from '../utils/constants';

export const StatusBar = (props: StatusBarProps) => {
  return <RNStatusBar {...props} backgroundColor={pallette.primary} />;
};
