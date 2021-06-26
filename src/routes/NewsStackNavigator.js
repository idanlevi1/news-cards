import React from 'react';
import { Platform, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NewsByCategory, Categories, Article, Favorites } from '../screens';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';
import { Header } from '../components';
import { SCREENS } from '../utils/Enums';

const Stack = createStackNavigator();

function NewsStackNavigator() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerBackTitleVisible: false
        }}>
          <Stack.Screen name={SCREENS.CATEGORIES} component={Categories}
            options={(props) => {
              console.log("NewsStackNavigator -> props", props)
              return ({
                title: 'News Categories',
                headerStyle: {
                  backgroundColor: Colors.yellow,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontFamily: Fonts.Walk,
                  // alignSelf: 'center',
                  paddingRight: Platform.OS == 'android' ? '10%' : 0
                },
                headerRight: () => <Header side='right' />,
                headerLeft: () => <Header side='left' />,
              })
            }}
          />

          <Stack.Screen name={SCREENS.NEWS_BY_CATEGORY} component={NewsByCategory}
            options={({ route }) => ({
              title: route.params.category,
              headerStyle: {
                backgroundColor: Colors.yellow,
              },
              headerTintColor: '#fff',
              // headerBackTitleVisible: false,
              headerTitleStyle: {
                fontFamily: Fonts.Walk,
                // alignSelf: 'center',
                paddingRight: Platform.OS == 'android' ? '10%' : 0
              },
            })} />
          <Stack.Screen name={SCREENS.ARTICLE} component={Article}
            options={({ route }) => ({
              title: 'Article',
              headerStyle: {
                backgroundColor: Colors.yellow,
              },
              headerTintColor: '#fff',
              //  headerBackTitleVisible: false,
              headerTitleStyle: {
                fontFamily: Fonts.Walk,
                // alignSelf: 'center',
                paddingRight: Platform.OS == 'android' ? '10%' : 0
              },
            })} />
          <Stack.Screen name={SCREENS.FAVORITES} component={Favorites}
            options={({ route }) => ({
              title: 'Favorites',
              headerStyle: {
                backgroundColor: Colors.yellow,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontFamily: Fonts.Walk,
                // alignSelf: 'center',
                paddingRight: Platform.OS == 'android' ? '10%' : 0
              },
              // headerBackTitleVisible: false,
              headerRight: () => <Header side='right' />,
            })} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default NewsStackNavigator