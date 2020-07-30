import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Switch, Button, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';


export default function MeritBadgeList({ navigation }) {
  const [people, setPeope] = useState([
    { title: 'Radio', filename: 'radio2', mbimage: require("../assets/radio.png")},
    { title: 'First Aid', filename: 'firstaid2', mbimage: require("../assets/firstaid.png")},
    { title: 'Camping', filename: 'camping2', mbimage: require("../assets/camping.png")},
    ]);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const onMBPress = (filename) => navigation.navigate("MeritBadgeBook", {filename: filename});
    const onTutorialPress = (filename) => navigation.navigate("Tutorial");
    
    const showAlert = () => {
      Alert.alert(
        'Download Book',
        'Do you wish to download a copy of the book to your device?',
        [
          {text: "Yes", onPress: () => console.warn('YES Pressed'), style: 'cancel'},
          {text: "No", onPress: () => console.warn('NO Pressed'), style: 'cancel'}
        ]
      )
    }
  
  return (
    <View style={styles.container}> 

      <View style={styles.header}>
        <Text style={styles.headertext}>BSA Merit Badges</Text>
      </View>
      <View style={styles.toprow}>
        <Button style={styles.buttonstyle}
          title="Tutorial"
          onPress={() => onTutorialPress ()}
        />
        <Button style={styles.buttonstyle}
          
          title="Downloaded"
        />
      </View>

      <FlatList
        keyExtractor={(item) => item.filename}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity 
          onPress={() => onMBPress (item.filename)}>
            <View style={styles.button}>
              <Image style={styles.image} source={item.mbimage} />
              <Text style={styles.text}>{item.title}</Text>
              <Switch style={styles.switchstyle}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => showAlert()}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}



const styles = StyleSheet.create ({
  container: {
    backgroundColor: "#FFF",
  },
  button: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    padding:10,
    borderWidth: 1,
    borderTopColor: "#FFF",
    borderRightColor: "#FFF",
    borderLeftColor: "#FFF",
    //borderRadius: 20,
    borderColor: "#ddd",
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
    fontSize: 20,
    paddingLeft: 20,
    fontFamily: "Avenir-Light",
    width: 200,
  },
  switchstyle: {
    alignSelf: "center",
  },
  buttonstyle: {

  },
  toprow: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderTopColor: "#FFF",
    borderLeftColor: "#FFF",
    borderRightColor: "#FFF",
    borderBottomColor: "#DDD",
    padding: 10
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",

  },
  headertext: {
    fontSize: 22,
    fontFamily: "Avenir-Light",
  }
})
