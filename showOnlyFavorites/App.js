import React, {useState} from 'react';
import {View, Text, FlatList, Switch} from 'react-native';

const data = [
  {id: 0, name: 'Cafe A', isFavorite: true},
  {id: 1, name: 'Cafe B', isFavorite: false},
  {id: 2, name: 'Cafe C', isFavorite: true},
  {id: 3, name: 'Cafe D', isFavorite: false},
  {id: 4, name: 'Cafe E', isFavorite: true},
];

const App = () => {
  const [cafeList, setCafeList] = useState(data);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  function onFavoritesChange(isFavoriteSelected) {
    setShowOnlyFavorites(isFavoriteSelected);
    isFavoriteSelected
      ? setCafeList(cafeList.filter(cafe => cafe.isFavorite))
      : setCafeList(data);
  }

  return (
    <View>
      <Text>Show only favorites</Text>
      <Switch value={showOnlyFavorites} onValueChange={onFavoritesChange} />
      <FlatList
        data={cafeList}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default App;
