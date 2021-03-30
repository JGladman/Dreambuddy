import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SetAlarm from "./components/SetAlarm";

export default function App() {
  const [content, setContent] = useState(
    <View>
      <Text>Hello</Text>
    </View>
  );
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
