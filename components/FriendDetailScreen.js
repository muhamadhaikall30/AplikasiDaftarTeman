import React from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';

const FriendDetailScreen = ({ route, navigation }) => {
  const { friend } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={friend.image} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{friend.name}</Text>
        <Text style={styles.description}>{friend.description}</Text>
      </View>
      <Button
        title="Kembali ke Daftar Teman"
        onPress={() => navigation.navigate('FriendList')}
        color="#008000"
        style={styles.button}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 40,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666666',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default FriendDetailScreen;
