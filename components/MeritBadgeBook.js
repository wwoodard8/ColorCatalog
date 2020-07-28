import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function MeritBadgeBook() {
   
  return (
    <View style={styles.container}> 
        <Text>Merit Badge Book</Text>
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
