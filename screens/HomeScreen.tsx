import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import BlogItem from '../components/BlogItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  BlogDetails: {id: string; title: string; description: string};
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const blogs = [
  {
    id: '1',
    title: 'React Native Basics',
    description: 'Understanding the fundamentals of React Native.',
  },
  {
    id: '2',
    title: 'Navigation in React Native',
    description: 'Learn how to use React Navigation.',
  },
  {
    id: '3',
    title: 'Redux Toolkit Overview',
    description: 'State management made simple.',
  },
];

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={blogs}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <BlogItem blog={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 10, backgroundColor: '#fff'},
});

export default HomeScreen;
