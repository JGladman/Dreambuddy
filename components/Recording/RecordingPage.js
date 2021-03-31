import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Button, Text, View, Alert } from "react-native";
import Layout from "../Common/Layout";

//import RecordingPage from "../App";

const RecordingPage = () => {
  const [content, setContent] = useState(
    <View style={styles.container}>
      <Text>Stop Alarm and Start Recording!</Text>
      <View style={styles.snooze}>
        <Button
          title="Snooze"
          color="#C4C4C4"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <View style={styles.noDream}>
        <Button
          title="No Dream"
          color="#C4C4C4"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
    </View>
  );
  return <Layout content={content} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    width: "100%",
    height: "10%",
  },
  header: {
    flex: 1,
  },
  time: {
    flex: 2,
  },
  content: {
    flex: 7,
  },
  recording: {
    flex: 1,
  },
  snooze: {
    width: "25%",
    height: "25%",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    left: 30,
    color: "black",
  },
  noDream: {
    width: "30%",
    height: "25%",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
    color: "black",
  },

  textStyle: {
    textAlign: "center",
    fontSize: 50,
    color: "black",
  },
  navbar: {
    flex: 1,
  },
});

export default RecordingPage;
