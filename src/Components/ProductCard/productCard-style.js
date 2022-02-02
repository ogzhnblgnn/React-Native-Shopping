import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#dbdbdb',
    width: Dimensions.get('window').width / 2.1,
    margin: 5,
    borderRadius: 10,
  },
  product_image: {
    marginTop: 15,
    marginLeft: 10,
    aspectRatio: 0.8,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  product_title: {
    marginTop: 10,
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },
  product_price: {
    color: '#525252',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    marginBottom: 8,
  },
  product_inStock: {
    textTransform: 'uppercase',
    color: '#FC2323',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
    marginBottom: 10,
  },
});
