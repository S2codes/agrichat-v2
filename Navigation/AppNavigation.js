// import { useEffect, useState } from 'react';
// import { StyleSheet, Text, View, } from 'react-native';
// // screens 
// import Home from '../src/screens/Home';
// import Communities from './src/screens/Communities';

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Community from './src/screens/Community';
// import ViewQuery from './src/screens/ViewQuery';
// import SignUpCategory from './src/screens/SignUpCategory';
// import SignUp from './src/screens/SignUp';
// import SignIn from './src/screens/SignIn';
// import { AntDesign, Ionicons } from '@expo/vector-icons';


// const Tab = createMaterialTopTabNavigator();
// const Stack = createNativeStackNavigator();


// const Root = () => {
//   return (
//     <Tab.Navigator screenOptions={{
//       tabBarActiveTintColor: '#000',
//       tabBarLabelStyle: { color: "#fff" },
//       tabBarStyle: { backgroundColor: '#5D9C59' },
//       tabBarIndicatorStyle: { backgroundColor: "#fff" }
//     }}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Communities" component={Communities} />
//       <Tab.Screen name="my room" component={Communities} />
//     </Tab.Navigator>
//   )
// }


// const  AppNaviagation =() => {


//   return (
//     <NavigationContainer >
//       {/* <View style={styles.topBar}>
//         <Text style={styles.mainHeading}>AgriChat</Text>
//         <AntDesign name="user" size={24} color="white" />
//       </View> */}
//       <Stack.Navigator screenOptions={{
//         headerTintColor: '#fff',
//         headerStyle: styles.stackHeader,
//         headerTitleStyle: {
//           fontSize: 17,
//         },
//         headerTitleAlign: "left"

//       }} initialRouteName='Signupcategory'>

//         <Stack.Screen name='Signup' component={SignUp} options={{
//           headerTitle: "Sign Up"
//         }} />
//         <Stack.Screen name='Signin' component={SignIn} options={{
//           headerTitle: "Sign In"
//         }} />

      

//         <Stack.Screen name='Index' component={Root} options={{ headerShown: false }} />
//         <Stack.Screen name='Communities' component={Communities} />
//         <Stack.Screen name='Signupcategory' component={SignUpCategory} options={{
//           headerShown: false
//         }} />

//         <Stack.Screen name='Community' component={Community} options={
//           ({ route }) => ({ title: route.params.Communityname })
//         } />
//         <Stack.Screen name='View' component={ViewQuery} options={
//           ({ route }) => ({ queryId: route.params.queryId })
//         } />



//       </Stack.Navigator>

//     </NavigationContainer>
//   );
// }


// const styles = StyleSheet.create({

//   Tablabel: {
//     color: "red",
//     // marginLeft: 5
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   topBar: {
//     marginTop: 20,
//     paddingTop: 9,
//     paddingHorizontal: 13,
//     backgroundColor: "#5D9C59",
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between"
//   },
//   mainHeading: {
//     fontSize: 19,
//     fontWeight: 600,
//     color: "#fff",
//     marginTop: 7
//   },
//   stackHeader: {
//     backgroundColor: '#5D9C59',
//   }


// });


// export default AppNaviagation 