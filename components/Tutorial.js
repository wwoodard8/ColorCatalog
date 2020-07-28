import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Tutorial({ route }) {
   
  return (
    <View style={styles.container}> 
        <Text>tutorial</Text>
    </View>
  );

}



const styles = StyleSheet.create ({
  container: {
    marginTop: 80,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
})
