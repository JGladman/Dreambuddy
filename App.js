import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Layout from "./components/Common/Layout";
import { PageContext, PageProvider } from "./components/Context/PageContext";
import Calendar from "./components/Calendar/Calendar";
export default function App() {
  // const [content, setContent] = useState(
  //   <View>
  //     <Calendar />
  //   </View>
  // );

  // return (
  //   <Context.Provider value={theme}>
  //     <div></div>
  //   </Context.Provider>
  // );
  // <Layout content={content} />;

  return (
    <PageProvider>
      <PageContext.Consumer>
        {(context) => (
          <View>
            <Layout content={<View>{context.state.page}</View>} />
          </View>
        )}
      </PageContext.Consumer>
    </PageProvider>
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
