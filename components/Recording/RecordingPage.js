import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Button, Text, View, Alert } from "react-native";
import RecordingTool from "../Recording/RecordingTool";
//import RecordingPage from "../App";

const RecordingPage = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 4, backgroundColor: "white", padding: "5%", borderTopLeftRadius: 50, borderTopRightRadius: 50, width: "100%", alignItems: "center" }}>
        <View>
          <Text style={styles.text}>Record a dream now.</Text>
        </View>
        <View style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
          <RecordingTool/> 
        </View>     
      </View>
    </View>
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
    marginTop: "10%",
    fontFamily: "roboto-bold",
  },
});

export default RecordingPage;
