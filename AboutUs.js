import React  from "react";
import {View , Text, StyleSheet} from 'react-native';


const HelloWorldApp = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Hello, world!</Text>
      </View>
    )
  }
  export default HelloWorldApp;