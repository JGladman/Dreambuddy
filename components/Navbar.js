import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Navbar = () => {
  const myFun = () => {
    console.log("Hello");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navbutton}>
        <View style={styles.buttonbg}>
          <Text>Set</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbutton}>
        <Text>Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navbutton} onPress={myFun}>
        <Text>Calendar</Text>
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
