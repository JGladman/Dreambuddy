import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { Context } from "../Context/PageContext";
import moment from "moment";

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
            <Icon name="alarm" type="material-community" color="#503d74" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navbutton}
            onPress={() => context.setCalendar()}
          >
            <Icon name="calendar" type="material-community" color="#503d74" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navbutton}
            onPress={() => {
              context.setDateSelected(moment().format("YYYY-MM-DD"));
              context.setRecording();
            }}
          >
            <Icon name="microphone" type="material-community" color="#503d74" />
          </TouchableOpacity>
        </View>
      )}
    </Context.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  navbutton: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonbg: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Navbar;
