import React from 'react';
import { StyleSheet, Text, View, ViewProps } from 'react-native';
import { pallette, utilities } from '../utils/constants';

interface BadgeProps extends ViewProps {
  type?: 'primary' | 'secondary';
  text: string;
}

export const Badge = ({ type = 'primary', text, ...next }: BadgeProps) => {
  return (
    <View {...next} style={[styles.badge, styles[type]]}>
      <Text style={styles.label}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    padding: utilities.padding.xs,
    borderRadius: utilities.borderRadius,
    alignSelf: 'flex-start',
    backgroundColor: pallette.primary,
    marginBottom: utilities.margin.md,
  },
  label: {
    color: '#fff',
  },
  primary: {
    backgroundColor: pallette.primary,
  },
  secondary: {
    backgroundColor: pallette.secondary,
  },
});
