import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function MeritBadgeBook({ route }) {
  const filename = route.params.filename
  const [downloading, setDownloading] = useState(true)

  return (
    <View style={{ flex: 1 }}>
      <WebView 
        source={{ uri: 'http://willwoodard.com/meritbadge/' + filename + '.pdf' }}
        onLoadEnd={() => setDownloading(false)}
      />
      <ActivityIndicator style={styles.activitystyle}
        color={Colors.blue}
        size={"large"}
        animating={downloading}
      />
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    marginTop: 80,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  },
  activitystyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
