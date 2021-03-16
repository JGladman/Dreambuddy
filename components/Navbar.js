import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const Navbar = () => {
  const myFun = () => {
    console.log("Hello");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navbutton}>
        <Icon name="alarm" type="material-community" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbutton}>
        <Icon name="calendar" type="material-community" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbutton} onPress={myFun}>
        <Icon name="microphone" type="material-community" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#C4C4C4",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  navbutton: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonbg: {
    width: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navbar;
