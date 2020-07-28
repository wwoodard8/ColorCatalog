import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Switch, Button, TouchableOpacity } from 'react-native';


export default function MeritBadgeList({ navigation }) {
  const [people, setPeope] = useState([
    { title: 'Radio', filename: 'radio', mbimage: require("../assets/radio.png")},
    { title: 'Citizenship in the Nation', filename: 'firstaid', mbimage: require("../assets/firstaid.png")},
    { title: 'Camping', filename: 'camping', mbimage: require("../assets/camping.png")},
    ]);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const onPress = (filename) => navigation.navigate("MeritBadgeBook");
    //const onPress = (filename) => console.log("meritbadge");

    
  return (
    <View style={styles.container}> 

      <View style={styles.header}>
        <Text style={styles.headertext}>BSA Merit Badges</Text>
      </View>
      <View style={styles.toprow}>
        <Button style={styles.buttonstyle}
          title="Tutorial"
        />
        <Button style={styles.buttonstyle}
          title="Downloaded"
        />
      </View>

      <FlatList
        keyExtractor={(item) => item.filename}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={onPress (item.filename)}>
            <View style={styles.button}>
              <Image style={styles.image} source={item.mbimage} />
              <Text style={styles.text}>{item.title}</Text>
              <Switch style={styles.switchstyle}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
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
