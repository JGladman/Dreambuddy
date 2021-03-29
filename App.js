import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./components/Layout";
import RecordingPage from "./components/RecordingPage";
//import {Context} from "./Context";

export function App() {
  const [content, setContent] = useState(
    <View>
      <Text>Hello</Text>
    </View>
  );

  return (
    <Context.Provider value = {theme}>
      <div>
      </div>
    </Context.Provider>);
    <Layout content={content} /> ;
  };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  header: {
    flex: 1,
  },
  content: {
    flex: 10,
  },
  navbar: {
    flex: 1,
  },
});

export default RecordingPage;