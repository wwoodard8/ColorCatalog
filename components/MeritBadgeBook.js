import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default function MeritBadgeBook({ route }) {
  const filename = route.params.filename

  return (
    <WebView 
    source={{ uri: 'http://willwoodard.com/meritbadge/' + filename + '.pdf' }} 
    />
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
