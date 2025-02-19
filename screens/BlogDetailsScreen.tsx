import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  BlogDetails: {id: string; title: string; description: string};
};

type BlogDetailsProps = {
  route: RouteProp<RootStackParamList, 'BlogDetails'>;
};

const BlogDetailsScreen: React.FC<BlogDetailsProps> = ({route}) => {
  const {title, description} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 10},
  description: {fontSize: 16, color: '#444'},
});

export default BlogDetailsScreen;
