import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  BlogDetails: {id: string; title: string; description: string};
};

type BlogItemProps = {
  blog: {id: string; title: string; description: string};
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const BlogItem: React.FC<BlogItemProps> = ({blog, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('BlogDetails', blog)}>
      <Text style={styles.title}>{blog.title}</Text>
      <Text numberOfLines={2} style={styles.description}>
        {blog.description}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  title: {fontSize: 18, fontWeight: 'bold'},
  description: {fontSize: 14, color: '#666', marginTop: 5},
});

export default BlogItem;
