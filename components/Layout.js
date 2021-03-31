import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { StyleSheet, Text, View } from "react-native";

const Layout = ({ content }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.content}>{content}</View>
      <View style={styles.navbar}>
        <Navbar />
      </View>
    </View>
  );
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
    justifyContent: "center",
  },
  navbar: {
    flex: 1,
  },
});

export default Layout;
