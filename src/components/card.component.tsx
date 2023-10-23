import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

export interface CardProps extends TouchableOpacityProps {}

export const Card = ({ children, style, ...next }: CardProps) => {
  return (
    <TouchableOpacity
      style={[styles.card, style]}
      activeOpacity={0.8}
      {...next}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#000',
  },
});
