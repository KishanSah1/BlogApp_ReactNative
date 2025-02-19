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
  {
    id: '4',
    title: 'Using React Native UI Components',
    description: 'Learn how to use the built-in UI components.',
  },
  {
    id: '5',
    title: 'Customizing React Native Components',
    description: 'Make your app look unique.',
  },
  {
    id: '6',
    title: 'React Native APIs',
    description: 'Learn how to use the built-in APIs.',
  },
  {
    id: '7',
    title: 'Using a third-party APIs',
    description: 'Learn how to use third-party APIs.',
  },
  {
    id: '8',
    title: 'React Native Performance Optimizations',
    description: 'Optimize your app for maximum performance.',
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
