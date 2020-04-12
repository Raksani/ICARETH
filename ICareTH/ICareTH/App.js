import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from "./src/screens/HomeScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>I CareTH</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     fontFamily: "Montserrat",
//     fontWeight: "bold",
//     fontSize: 20,
//     backgroundColor: '#4F4F4F',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
