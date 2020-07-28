import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function MeritBadgeBook({ route }) {
   
  return (
    <View style={styles.container}> 
        <Text>Book: {route.params.filename}</Text>
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