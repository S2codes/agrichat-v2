import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
// screens 
import Home from './src/screens/Home';
import Communities from './src/screens/Communities';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Community from './src/screens/Community';
import ViewQuery from './src/screens/ViewQuery';
import SignUpCategory from './src/screens/SignUpCategory';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react';

import RNRestart from 'react-native-restart'
import First from './src/screens/First';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();


const Root = () => {
  return (


    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: '#000',
      tabBarLabelStyle: { color: "#fff" },
      tabBarStyle: { backgroundColor: '#5D9C59' },
      tabBarIndicatorStyle: { backgroundColor: "#fff" },
    }}>

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Communities" component={Communities} />
      <Tab.Screen name="my room" component={Communities} />
    </Tab.Navigator>
  )
}




export default function App() {

  const [isLogged, setIsLogged] = useState(false)

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('user_token')
      const id = await AsyncStorage.getItem('user_id')
      if (token !== null) {
        setIsLogged(true)
      }
    } catch (e) {
      console.log("asunc storage error");
      console.log(e);
    }
  }


  useEffect(() => {
    getData()
  }, [])


  return (
    <NavigationContainer >
{/* 
    <View style={styles.topBar}>
        <Text style={styles.mainHeading}>AgriChat</Text>
        <TouchableOpacity onPress={async () => {
          Alert.alert("logout")
          try {
            await AsyncStorage.removeItem('user_token')
            await AsyncStorage.removeItem('user_id')
            console.log("logout =--");
            // RNRestart.Restart();
          } catch (error) {
            console.log(error);
          }


        }}>
          <AntDesign name="logout" size={24} color="white" />
        </TouchableOpacity>
      </View> */}


      <Stack.Navigator screenOptions={{
        headerTintColor: '#fff',
        headerStyle: styles.stackHeader,
        headerTitleStyle: {
          fontSize: 17,
        },
        headerTitleAlign: "left"

      // }} initialRouteName='Signupcategory'>
      }} initialRouteName='First'>

        {isLogged ? (
          <>
            <Stack.Screen name='Index' component={Root} options={{ headerShown: false }} />
            <Stack.Screen name='Communities' component={Communities} />

            <Stack.Screen name='Community' component={Community} options={
              ({ route }) => ({ title: route.params.Communityname })
            } />
            <Stack.Screen name='View' component={ViewQuery} options={
              ({ route }) => ({ queryId: route.params.queryId })
            } />

          </>

        ) : (

          <>

            <Stack.Screen name='First' component={First} options={{
              headerShown: false
            }} />

            <Stack.Screen name='Signupcategory' component={SignUpCategory} options={{
              headerShown: false
            }} />

            <Stack.Screen name='Signup' component={SignUp} options={{
              headerTitle: "Sign Up"
            }} />
            <Stack.Screen name='Signin' component={SignIn} options={{
              headerTitle: "Sign In"
            }} />

          </>

        )}







      </Stack.Navigator>

    </NavigationContainer>
  );
}


const styles = StyleSheet.create({

  Tablabel: {
    color: "red",
    // paddingTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    marginTop: 20,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: "#5D9C59",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  mainHeading: {
    fontSize: 19,
    fontWeight: 600,
    color: "#fff",
    marginTop: 7
  },
  stackHeader: {
    backgroundColor: '#5D9C59',
  }


});
