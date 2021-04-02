import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Layout from "./components/Common/Layout";
import { Context, Provider } from "./components/Context/PageContext";
import Calendar from "./components/Calendar/Calendar";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  console.log("hi");
	const [fontLoaded, setFontLoaded] = useState(false);
	// load fonts
	const loadFonts = () => {
		return Font.loadAsync({
			"roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
			"roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
			"roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
		});
	};

	// ensure fonts load before content
	if (!fontLoaded){
		return (
			<AppLoading
				startAsync = {loadFonts}
				onFinish = {() => setFontLoaded(true)}
				onError = {(err) => console.error(err)}
			/>
		);
	}	

	// fonts have loaded; return page content
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
