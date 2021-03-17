import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Dreambuddy</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "#C4C4C4",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    justifyContent: "center",
  },
});

export default Header;
