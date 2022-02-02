import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './productCard-style';

const ProductCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.product_image} source={{uri: item.imgURL}} />
      <Text style={styles.product_title}>{item.title}</Text>
      <Text style={styles.product_price}>{item.price}</Text>
      {!item.inStock && <Text style={styles.product_inStock}>stokta yok</Text>}
    </View>
  );
};

export default ProductCard;
