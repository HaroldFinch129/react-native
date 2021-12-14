import React from 'react';
import {View,Text,FlatList, StyleSheet, } from 'react-native';
import patikastore_data from './patikastore_data.json';
import PatikastoreCard from './components/patikastore/PatikastoreCard';

const App = () => {
  const renderStore =({item}) => <PatikastoreCard stores={item} />;
  
  return(
    <View style={styles.container}>
      <Text style={styles.headline}>PATIKASTORE</Text>
      
      <FlatList 
     
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
  },
  
  headline:{
    textAlign:'center',
    fontSize:50,
    color:'purple',
    fontWeight:'bold',  
  },
 
  
})

export default App;