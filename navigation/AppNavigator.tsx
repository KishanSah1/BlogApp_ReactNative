import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BlogDetailsScreen from '../screens/BlogDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Text } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';



type RootStackParamList = {
  Home: undefined;
  BlogDetails: {id: string; title: string; description: string};
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="BlogDetails" component={BlogDetailsScreen} />
  </Stack.Navigator>
);

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName: string;
          if (route.name === 'HomeTab') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }
          return <Text>🏠</Text>;
        },
        // <Ionicons name={iconName} size={size} color={color} />
      })}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{title: 'Home', headerShown: false}}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
