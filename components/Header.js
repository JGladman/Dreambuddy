import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

const Header = () => {
  return (
    <SafeAreaView>
      <Image style={{width: 300, height: 100, backgroundColor: "#503D74"}}
        source={require('./logo.png')}
      />
    </SafeAreaView>
  );
};

export default Header;
