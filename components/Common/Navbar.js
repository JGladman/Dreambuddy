import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { Context } from "../Context/PageContext";

const Navbar = () => {
  //const { state, setState } = useContext(PageContext);

  return (
    <Context.Consumer>
      {(context) => (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.navbutton}
            onPress={() => context.setAlarm("test")}
          >
            <Icon name="alarm" type="material-community" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navbutton}
            onPress={() => context.setCalendar()}
          >
            <Icon name="calendar" type="material-community" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navbutton}
            onPress={() => context.setRecording()}
          >
            <Icon name="microphone" type="material-community" />
          </TouchableOpacity>
        </View>
      )}
    </Context.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D6D0F1",
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
