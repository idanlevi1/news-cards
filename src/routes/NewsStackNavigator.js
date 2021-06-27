import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NewsByCategory, Categories, Article, Favorites } from '../screens';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';
import { Header } from '../components';
import { SCREENS } from '../utils/Enums';

const Stack = createStackNavigator();

const stackScreenOptions = () => ({
  title: 'News Categories',
  headerStyle: {
    backgroundColor: Colors.yellow,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: Fonts.Walk,
    alignSelf: 'center'
  },
  headerRight: () => <Header side='right' />
})

function NewsStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
        <Stack.Screen name={SCREENS.CATEGORIES} component={Categories}
          options={(props) => ({ ...stackScreenOptions(), headerLeft: () => <Header side='left' /> })} />
        <Stack.Screen name={SCREENS.NEWS_BY_CATEGORY} component={NewsByCategory}
          options={(props) => stackScreenOptions()} />
        <Stack.Screen name={SCREENS.ARTICLE} component={Article}
          options={(props) => stackScreenOptions()} />
        <Stack.Screen name={SCREENS.FAVORITES} component={Favorites}
          options={(props) => stackScreenOptions()} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NewsStackNavigator