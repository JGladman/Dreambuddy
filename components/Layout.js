import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import RecordingTool from "./RecordingTool";
import GetTime from"./GetTime";
import { StyleSheet, Text, View } from "react-native";

/*
function Page(props) {
  const user = props.user;
  const userLink = (
    <StopRecording uri={user.sound}/>
  );
  return <Layout userLink={userLink}/>;
}
*/
const Layout = ({ content }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>
      </View>
      
      <View style={styles.time}>
        <GetTime />
      </View>

      <View style={styles.recording}>
        <RecordingTool/>
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
  time: {
    flex:2,
  },
  content: {
    flex: 3,
  },
  recording:{
    flex: 2,
  },
  navbar: {
    flex: 1,
  },
});

export default Layout;
