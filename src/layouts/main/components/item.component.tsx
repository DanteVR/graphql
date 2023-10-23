import React from 'react';
import { Card } from '../../../components';
import { Image, StyleSheet } from 'react-native';
import { screen, utilities } from '../../../utils/constants';
import { useNavigation } from '@react-navigation/native';

interface ItemProps {
  image: string;
}

export const Item = ({ image }: ItemProps) => {
  const navigation = useNavigation();
  return (
    <Card onPress={() => navigation.goBack()}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: screen.width / 2,
    height: screen.width / 2,
    resizeMode: 'cover',
    borderRadius: utilities.borderRadius,
  },
});
