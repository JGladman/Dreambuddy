/** JavaScript file for empty date page */

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { Context } from "../Context/PageContext";

const EmptyDate = () => {
  const [text, onChangeText] = React.useState(null);

  return (
    <Context.Consumer>
      {(context) => (
        <View style={styles.container}>
          <View>
            <TouchableOpacity
              style={styles.back}
              onPress={() => context.setCalendar()}
            >
              <Icon
                color="#503D74"
                name="chevron-left"
                type="material-community"
              />
              <Text style={{ color: "#503D74" }}>Back</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.date}>Friday, March 5</Text>
          </View>

          <View>
            <Text style={styles.text}>No dream recorded. Add one now!</Text>
          </View>

          <View
            style={{
              padding: "10%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={styles.image}
              source={require("../../assets/moon-only.jpg")}
            />
          </View>
        </View>
      )}
    </Context.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 1.5,
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
    color: "#503D74",
  },
  text: {
    color: "#503D74",
    padding: 8,
    fontSize: 16,
    marginTop: "3%",
    fontFamily: "roboto-bold",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default EmptyDate;
