/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Header, NewsCategories } from './src/components';
import NewsStackNavigator from './src/routes/NewsStackNavigator';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      {/* <SafeAreaView > */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <Header title={'News Card'} /> */}
      {/* <NewsCategories /> */}
      <NewsStackNavigator />
      {/* </SafeAreaView> */}
    </>
  );
};


export default App;
