import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { Item } from '../components/item.component';

interface ListProps {
  data: any;
}

export const CharactersList = ({ data }: ListProps) => {
  const renderItem = useCallback(
    ({ item: { image } }: any) => <Item image={image} />,
    [],
  );

  return (
    <FlatList
      numColumns={2}
      data={data}
      renderItem={renderItem}
      keyExtractor={character => character.id.toString()}
    />
  );
};
