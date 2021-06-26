import React from 'react';
import { TouchableOpacity, Platform, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NewsByCategory, Categories, Article, Favorites } from '../screens';
import { Button, IconButton } from 'react-native-paper';
import Colors from '../utils/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '../utils/Fonts';
import { Login } from '../components';
import { isUserConnectedSelector, getUserDataSelector } from '../store/userStore/userStore.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { favoritesSelector } from '../store/newsStore/newsStore.selectors';
import { logoutUser } from '../store/userStore/userStore.actions';

const Stack = createStackNavigator();

function NewsStackNavigator() {
  const dispatch = useDispatch();
  const isUserConnected = useSelector(isUserConnectedSelector);
  const userData = useSelector(getUserDataSelector);
  console.log("NewsStackNavigator -> isUserConnected", isUserConnected)

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={Categories}
            options={(props) => {
              console.log("NewsStackNavigator -> props", props)
              return ({
                title: 'News Categories',
                headerStyle: {
                  // borderBottomWidth: 1,
                  // borderBottomColor: Colors.pink,
                  backgroundColor: Colors.dark_pink,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontFamily: Fonts.Walk,
                  // alignSelf: 'center',
                  paddingRight: Platform.OS == 'android' ? '10%' : 0
                },
                headerRight: () => (
                  isUserConnected ?
                    <TouchableOpacity style={{ marginRight: 10, padding: 1 }} onPress={() => { dispatch(logoutUser()) }}>
                      <Image
                        resizeMode={'cover'}
                        style={{ width: 35, height: 35, borderRadius: 35 }}
                        source={{ uri: userData.image || 'https://cdn4.iconfinder.com/data/icons/basics-set-2/100/Question-512.png' }}
                        opacity={0.85}
                      />
                      <Text style={{ color: Colors.white }}>{userData.name}</Text>
                    </TouchableOpacity> :
                    (
                      <TouchableOpacity style={{ marginRight: 10, padding: 1 }} onPress={() => { props.navigation.navigate('Favorites') }}>
                        <MaterialCommunityIcons name="star" color={'blue'} size={38} />
                      </TouchableOpacity>
                    )
                )
              })
            }}
          // options={{ headerTitle: props => <Header {...props} title={'HEADDDER'} /> }}
          />

          <Stack.Screen name="NewsByCategory" component={NewsByCategory}
            options={({ route }) => ({
              title: route.params.category,
              headerStyle: {
                backgroundColor: Colors.dark_pink,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontFamily: Fonts.Walk,
                // alignSelf: 'center',
                paddingRight: Platform.OS == 'android' ? '10%' : 0
              },
            })} />
          <Stack.Screen name="Article" component={Article}
            options={({ route }) => ({
              title: 'Article',
              headerStyle: {
                backgroundColor: Colors.dark_pink,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontFamily: Fonts.Walk,
                // alignSelf: 'center',
                paddingRight: Platform.OS == 'android' ? '10%' : 0
              },
            })} />
          <Stack.Screen name="Favorites" component={Favorites}
            options={({ route }) => ({
              title: 'Favorites',
              headerStyle: {
                backgroundColor: Colors.dark_pink,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontFamily: Fonts.Walk,
                // alignSelf: 'center',
                paddingRight: Platform.OS == 'android' ? '10%' : 0
              },
            })} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

export default NewsStackNavigator