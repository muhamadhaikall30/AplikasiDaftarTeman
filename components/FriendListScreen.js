import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

const FriendListScreen = ({ navigation }) => {
  const friends = [
    {
      id: '1',
      name: 'Agung Prayoga',
      description: 'Teman Sekelas',
      image: require('../assets/Agungpp.png'),
    },
    {
      id: '2',
      name: 'Muhammad Agan Suganda',
      description: 'Teman Sekelas',
      image: require('../assets/Agan.jpg'),
    },
    {
      id: '3',
      name: 'Candra Kusuma Hidayat',
      description: 'Teman Sekelas',
      image: require('../assets/pp1.jpg'),
    },
    {
      id: '4',
      name: 'Muhammad Insan Fadillah',
      description: 'Teman Sekelas',
      image: require('../assets/ican.jpg'),
    },
    {
      id: '5',
      name: 'Aldy Ramadani',
      description: 'Teman Sekelas',
      image: require('../assets/pp.png'),
    },
    
  ];

  const renderFriendItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', { friend: item })}
      style={styles.itemContainer}
    >
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        renderItem={renderFriendItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  list: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  imageContainer: {
    marginRight: 12,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666666',
  },
});

export default FriendListScreen;
