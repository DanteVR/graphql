import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from 'react-native';
import { pallette } from '../utils/constants';

interface LoadingProps extends ActivityIndicatorProps {}

export const Loading = ({
  size = 'large',
  color = pallette.primary,
  ...next
}: LoadingProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} {...next} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
