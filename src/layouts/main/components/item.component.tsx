import React from 'react';
import { Card } from '../../../components';
import { Image, StyleSheet } from 'react-native';
import { screen } from '../../../utils/constants';
import { MainScreenNavigationProp } from '..';
import { useNavigation } from '@react-navigation/native';
import { Character } from '../../../schemas/character.schema';

interface ItemProps {
  character: Character;
}

export const Item = ({ character }: ItemProps) => {
  const navigation = useNavigation<MainScreenNavigationProp>();

  return (
    <Card onPress={() => navigation.navigate('Detail', { ...character })}>
      <Image
        style={styles.image}
        source={{
          uri: character.image,
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
  },
});
