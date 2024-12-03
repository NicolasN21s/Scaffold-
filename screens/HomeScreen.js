import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await axios.get(require('../data/dummy_stock_data.json'));
        setStocks(response.data.stocks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStocks();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>Price: {item.price}</Text>
      <Text>Change: {item.daily_change}%</Text>
    </View>
  );

  return (
    <FlatList
      data={stocks}
      renderItem={renderItem}
      keyExtractor={(item) => item.symbol}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 20,
  },
});

export default HomeScreen;
