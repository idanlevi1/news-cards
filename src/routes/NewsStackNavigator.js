import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NewsByCategory, Categories, Article } from '../screens';
import { Button } from 'react-native-paper';

const Stack = createStackNavigator();

function NewsStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories}
          options={({ route }) => ({
            title: 'News Categories',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />)
          })}
        // options={{ headerTitle: props => <Header {...props} title={'HEADDDER'} /> }}
        />

        <Stack.Screen name="NewsByCategory" component={NewsByCategory}
          options={({ route }) => ({
            title: route.params.category,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })} />
        <Stack.Screen name="Article" component={Article}
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NewsStackNavigator