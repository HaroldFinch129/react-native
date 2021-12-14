import React from 'react';
import {View,Text,FlatList, StyleSheet, Dimensions, } from 'react-native';
import patikastore_data from './patikastore_data.json';
import PatikastoreCard from './components/patikastore/PatikastoreCard';
import SearchBar from './components/patikastore/SearchBar';

const App = () => {
  const renderStore =({item}) => <PatikastoreCard stores={item} />;
  
  return(
    <View style={styles.container}>
      <Text style={styles.headline}>PATIKASTORE</Text>
      <SearchBar/>
      <FlatList style={styles.flat} horizontal={false} numColumns={2}
      data={patikastore_data}
      renderItem={renderStore}
      keyExtractor={item =>  item.id.toString()}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#efefef',
    flexWrap:'wrap',
    alignItems:'center',
    
  },
  
  headline:{
    textAlign:'center',
    fontSize:50,
    color:'purple',
    fontWeight:'bold',  
  },
 flat:{
   maxWidth:400,
 }
  
})

export default App;