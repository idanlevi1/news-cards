import React from 'react';
import { View, StatusBar, useColorScheme } from 'react-native';
import NewsStackNavigator from './src/routes/NewsStackNavigator';
import Splash from './src/components/Splash/Splash';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';

const App = () => {
  const [ready, setReady] = React.useState(false)
  const isDarkMode = useColorScheme() === 'dark';

  React.useEffect(() => {
    setTimeout(() => setReady(true), 2000)
  }, [])
  return (

    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <PersistGate loading={<View />} persistor={persistor}>
          {ready ?

            <NewsStackNavigator />
            :
            <Splash />}
        </PersistGate>
      </Provider>
    </>
  );
};


export default App;
