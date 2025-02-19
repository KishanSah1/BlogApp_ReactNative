import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const userNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const randomUserName = userNames[Math.floor(Math.random() * userNames.length)];

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `https://i.pravatar.cc/150?u=${randomUserName}`}}
        style={styles.avatar}
      />
      <Text style={styles.name}>{randomUserName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  avatar: {width: 100, height: 100, borderRadius: 50, marginBottom: 10},
  name: {fontSize: 20, fontWeight: 'bold'},
});

export default ProfileScreen;
