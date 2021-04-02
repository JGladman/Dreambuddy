// import React from "react";
// import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

// const Header = () => {
//   return (
//     <SafeAreaView>
//       <Image style={{width: 300, height: 100}}
//         source={require('./logo.png')}
//       />
//     </SafeAreaView>
//   );
// };

// export default Header;

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* <Text style={styles.text}>Dreambuddy</Text> */}
        <Image
          style={{ width: 300, height: 100 }}
          source={require("../../assets/logo.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100",
    height: "100%",
  },
  container: {
    backgroundColor: "#503d74",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10%",
    paddingBottom: "10%",
  },
  text: {
    justifyContent: "center",
  },
});

export default Header;
