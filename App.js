/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Header, NewsCategories } from './src/components';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header title={'News Card'} />
      <NewsCategories />
    </SafeAreaView>
  );
};


export default App;
