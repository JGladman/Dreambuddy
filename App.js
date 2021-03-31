import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SetAlarm from "./components/SetAlarm";
import Layout from "./components/Layout";
import RecordingPage from "./components/RecordingPage";
//import {Context} from "./Context";
import Page from "./components/Date";
import EmptyPage from "./components/EmptyDate";
import Calendar from "./components/Calendar";
import Page from "./components/Date";
import EmptyPage from "./components/EmptyDate";

export default function App() {
  const [content, setContent] = useState(
    <View>
      <Calendar />
    </View>
  );

  // return (
  //   <Context.Provider value={theme}>
  //     <div></div>
  //   </Context.Provider>
  // );
  // <Layout content={content} />;
  const onPress = () =>
    setContent(
      <View>
        <Text>Hello2</Text>
      </View>
    );
  return <SetAlarm content={content} />;
}

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
