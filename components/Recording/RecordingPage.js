import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Button, Text, View, Alert } from "react-native";
import RecordingTool from "../Recording/RecordingTool";
import moment from "moment";
import { Context } from "../Context/PageContext";

//import RecordingPage from "../App";

const RecordingPage = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <View style={styles.container}>
          <View
            style={{
              flex: 4,
              backgroundColor: "white",
              padding: "5%",
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              width: "100%",
              alignItems: "center",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              {context.state.recording ? (
                <Text style={styles.text}>Press button to stop recording</Text>
              ) : (
                <Text style={styles.text}>
                  Press button to start recording for
                </Text>
              )}
              <View>
                <Text style={styles.date}>
                  {moment(context.state.dateSelected, "YYYY-MM-DD").format(
                    "dddd, MMMM Do"
                  )}
                </Text>
              </View>
            </View>
            <View style={{ height: "100%", marginTop: "20%" }}>
              <RecordingTool />
            </View>
          </View>
        </View>
      )}
    </Context.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#503D74",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#503D74",
    padding: 8,
    fontSize: 16,
    fontFamily: "roboto-bold",
    marginTop: "10%",
  },
  date: {
    color: "#503D74",
    padding: 8,
    fontSize: 20,
    fontFamily: "roboto-bold",
  },
});

export default RecordingPage;
