/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import NewsStackNavigator from './src/routes/NewsStackNavigator';
import Splash from './src/components/Splash/Splash';


const App = () => {
  const [ready, setReady] = React.useState(false)
  const isDarkMode = useColorScheme() === 'dark';

  React.useEffect(() => {
    setTimeout(() => setReady(true), 300)
  }, [])
  return (
    <>
      {/* <SafeAreaView > */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <Header title={'News Card'} /> */}
      {/* <Categories /> */}
      {ready ? <NewsStackNavigator /> : <Splash />}
      {/* </SafeAreaView> */}
    </>
  );
};


export default App;
