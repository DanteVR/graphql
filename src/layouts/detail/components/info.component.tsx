import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Character } from '../../../schemas/character.schema';
import { Badge } from '../../../components';
import { utilities } from '../../../utils/constants';

interface DetailProps {
  character: Character;
}

export const Info = ({ character }: DetailProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: character.image,
        }}
      />
      <View style={styles.info}>
        <Badge text={`Name: ${character.name}`} />
        <Badge text={`Species: ${character.species}`} type="secondary" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  info: {
    position: 'absolute',
    top: utilities.margin.md,
    left: utilities.margin.md,
  },
});
