/** JavaScript file for empty date page */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

const EmptyDate = () => {
  const [text, onChangeText] = React.useState(null);

  return (
    <View style={styles.container}>
      <View>
          <TouchableOpacity style={styles.back}>
              <Icon color="#503D74" name="chevron-left" type="material-community" />
              <Text style={{color: "#503D74"}}>Back</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.date}>Friday, March 5</Text>
        </View>

      <View>
        <Text style={styles.text}>No dream recorded. Add one now!</Text>
      </View>

      <Image
          style={{ width: "75%" }}
          source={require("../../assets/moon-only.jpg")}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: "1.5em",
    fontFamily: "Arial",
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10%",
    fontFamily: "roboto-regular",
  },
  date: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 8,
    marginTop: "10%",
    fontFamily: "roboto-bold",
    color: "#503D74"
  },
  text: {
    color: "#503D74",
    padding: 8,
    fontSize: 16,
    marginTop: "3%",
    fontFamily: "roboto-bold",
  },
});

export default EmptyDate;
