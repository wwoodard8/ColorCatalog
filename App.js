import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Switch } from 'react-native';
import radio from "./assets/radio.png"
import firstaid from "./assets/firstaid.png"
import camping from "./assets/camping.png"

export default function App() {
  const [people, setPeope] = useState([
    { title: 'Radio', filename: 'radio', mbimage: require("./assets/radio.png")},
    { title: 'Citizenship in the Nation', filename: 'firstaid', mbimage: require("./assets/firstaid.png")},
    { title: 'Camping', filename: 'camping', mbimage: require("./assets/camping.png")},
    ]);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}> 

      <FlatList
        keyExtractor={(item) => item.filename}
        data={people}
        renderItem={({item}) => (
          <View style={styles.button}>
            <Image style={styles.image} source={item.mbimage} />
            <Text style={styles.text}>{item.title}</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    marginTop: 80,
    backgroundColor: "#FFF",
  },
  button: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    padding:10,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "#FFF",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  text: {
    alignSelf: "center",
    textAlign: "left",
    fontSize: 25,
    paddingLeft: 20,
  }
})
