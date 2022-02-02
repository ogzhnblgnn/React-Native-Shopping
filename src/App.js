import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import ProductCard from './Components/ProductCard/productCard';
import data from './data.json';
import {useState} from 'react';
import SearchBar from './Components/SearchBar/searchBar';

const App = () => {
  const renderItems = ({item}) => <ProductCard item={item} />;
  const [products, setProducts] = useState(data);

  const handleSearch = text => {
    const filteredList = data.filter(product => {
      const searchedText = text.toLowerCase();
      const currentTitle = product.title.toLowerCase();

      //searchedText currentTitle ın içinde varsa yani değeri -1 den büyükse döndürür
      return currentTitle.indexOf(searchedText) > -1;
    });
    setProducts(filteredList);
  };

  return (
    <SafeAreaView style={styles.conatiner}>
      <Text style={styles.title}>OZZYSTORE</Text>
      <SearchBar onChange={handleSearch} />
      <FlatList data={products} renderItem={renderItems} numColumns={2} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  title: {
    color: '#800080',
    fontSize: 30,
    fontWeight: '800',
    marginLeft: 5,
  },
});

export default App;
