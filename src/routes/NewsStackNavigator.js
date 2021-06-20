import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NewsCategories, Header } from '../components';
import { NewsByCategory } from '../screens';
import { Button } from 'react-native-paper';

const Stack = createStackNavigator();

function NewsStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NewsCategories" component={NewsCategories}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NewsStackNavigator