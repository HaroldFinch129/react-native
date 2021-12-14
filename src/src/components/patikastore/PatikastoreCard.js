import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './PatikastoreCard.style';

const PatikastoreCard = ({stores}) => {
  var Stock = stores.inStock;
  const Stocking = () => {
    if (Stock == true) {
      return <Text></Text>;
    } else {
      return <Text style={styles.inStock}>STOKTA YOK</Text>;
    }
  };
  return (
    <View style={styles.card_container}>
      <View style={styles.image_container}>
        <Image resizeMode='contain' style={styles.image} source={{uri: stores.imgURL}} />
      </View>
      <Text style={styles.title}>{stores.title}</Text>
      <Text style={styles.price}>{stores.price}</Text>
      <Stocking>{Stocking}</Stocking>
    </View>
  );
};

export default PatikastoreCard;
