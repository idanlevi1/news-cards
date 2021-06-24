import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NewsByCategory, Categories, Article, Favorites } from '../screens';
import { Button, IconButton } from 'react-native-paper';
import Colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

function NewsStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories}
          options={(props) => {
            console.log("NewsStackNavigator -> props", props)

            return ({
              title: 'News Categories',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 10, padding: 1 }} onPress={() => { props.navigation.navigate('Favorites') }}><MaterialCommunityIcons name="star" color={'yellow'} size={38} /></TouchableOpacity>
              )
            })
          }}
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
        <Stack.Screen name="Favorites" component={Favorites}
          options={({ route }) => ({
            title: route.params ?.title || 'Favorites',
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