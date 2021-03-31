import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Layout from "./components/Common/Layout";
import { Context, Provider } from "./components/Context/PageContext";
import Calendar from "./components/Calendar/Calendar";
export default function App() {
  console.log("Reloaded");
  return (
    <Provider>
      <Context.Consumer>
        {(context) => (
          <View>
            <Layout content={<View>{context.state.page}</View>} />
          </View>
        )}
      </Context.Consumer>
    </Provider>
  );
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
