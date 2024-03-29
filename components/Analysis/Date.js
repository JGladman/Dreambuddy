/** JavaScript file for specific date page */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Switch,
  View,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";
import { Context } from "../Context/PageContext";
import moment from "moment";
import { Audio } from "expo-av";

const Date = () => {
  const [text, onChangeText] = React.useState(null);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
  const toggleSwitch4 = () => setIsEnabled4((previousState) => !previousState);

  return (
    <Context.Consumer>
      {(context) => (
        <View style={styles.container}>
          <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <View
                style={{
                  flexDirection: "column",
                  flex: 1,
                  backgroundColor: "#503D74",
                }}
              >
                <View
                  style={{ flex: 1, paddingHorizontal: "5%", paddingTop: "5%" }}
                >
                  <View>
                    <TouchableOpacity
                      style={styles.back}
                      onPress={() => {
                        context.setCalendar();
                      }}
                    >
                      <Icon
                        color="white"
                        name="chevron-left"
                        type="material-community"
                      />
                      <Text style={{ color: "white" }}>Back</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={styles.date}>
                      {moment(context.state.dateSelected, "YYYY-MM-DD").format(
                        "dddd, MMMM Do"
                      )}
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={styles.recording}
                      onPress={async () => {
                        let uri;
                        for (let date in context.state.uris) {
                          if (date === context.state.dateSelected) {
                            uri = context.state.uris[date];
                          }
                        }
                        const { sound } = await Audio.Sound.createAsync(
                          { uri: uri },
                          { shouldPlay: true }
                        );
                        console.log("Playing Sound");
                        sound.setVolumeAsync(1);
                        await sound.playAsync();
                      }}
                    >
                      <Icon
                        color="#FEE375"
                        name="play-circle"
                        type="material-community"
                      />
                      <Text style={{ paddingLeft: 5, color: "white" }}>
                        Play Recording
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    flex: 4,
                    backgroundColor: "white",
                    padding: "5%",
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                  }}
                >
                  <View>
                    <Text style={styles.text}>How was your dream?</Text>
                  </View>

                  <View>
                    <View style={styles.fixToText}>
                      <View style={styles.selection}>
                        <Text style={styles.label}>Positive</Text>
                      </View>
                      <View style={styles.switch}>
                        <Switch
                          trackColor={{ false: "#fee375", true: "#503d74" }}
                          thumbColor={isEnabled1 ? "#FFFFFF" : "#FFFFFF"}
                          ios_backgroundColor="#fee375"
                          onValueChange={toggleSwitch1}
                          value={isEnabled1}
                        />
                      </View>
                      <View style={styles.selection}>
                        <Text style={styles.label}>Negative</Text>
                      </View>
                    </View>

                    <View style={styles.fixToText}>
                      <View style={styles.selection}>
                        <Text style={styles.label}>Realistic</Text>
                      </View>
                      <View style={styles.switch}>
                        <Switch
                          trackColor={{ false: "#fee375", true: "#503d74" }}
                          thumbColor={isEnabled2 ? "#FFFFFF" : "#FFFFFF"}
                          ios_backgroundColor="#fee375"
                          onValueChange={toggleSwitch2}
                          value={isEnabled2}
                        />
                      </View>
                      <View style={styles.selection}>
                        <Text style={styles.label}>Unrealistic</Text>
                      </View>
                    </View>

                    <View style={styles.fixToText}>
                      <View style={styles.selection}>
                        <Text style={styles.label}>Lucid</Text>
                      </View>
                      <View style={styles.switch}>
                        <Switch
                          trackColor={{ false: "#fee375", true: "#503d74" }}
                          thumbColor={isEnabled3 ? "#FFFFFF" : "#FFFFFF"}
                          ios_backgroundColor="#fee375"
                          onValueChange={toggleSwitch3}
                          value={isEnabled3}
                        />
                      </View>
                      <View style={styles.selection}>
                        <Text style={styles.label}>Not Lucid</Text>
                      </View>
                    </View>

                    <View style={styles.fixToText}>
                      <View style={styles.selection}>
                        <Text style={styles.label}>Short</Text>
                      </View>
                      <View style={styles.switch}>
                        <Switch
                          trackColor={{ false: "#fee375", true: "#503d74" }}
                          thumbColor={isEnabled4 ? "#FFFFFF" : "#FFFFFF"}
                          ios_backgroundColor="#fee375"
                          onValueChange={toggleSwitch4}
                          value={isEnabled4}
                        />
                      </View>
                      <View style={styles.selection}>
                        <Text style={styles.label}>Long</Text>
                      </View>
                    </View>
                  </View>

                  <View>
                    <Text style={styles.text}>Notes:</Text>
                  </View>

                  <View style={styles.notes}>
                    <TextInput
                      multiline
                      style={styles.input}
                      editable
                      onChangeText={onChangeText}
                      value={text}
                      placeholder="Add additional notes here."
                    ></TextInput>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </View>
      )}
    </Context.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10%",
    fontFamily: "roboto-regular",
  },
  recording: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "10%",
    fontFamily: "roboto-regular",
    marginLeft: "10%",
    marginBottom: "10%",
  },
  button: {
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#7664CE",
    padding: 10,
    alignItems: "center",
    paddingTop: 12,
  },
  date: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 8,
    marginTop: "10%",
    fontFamily: "roboto-bold",
    color: "white",
  },
  label: {
    color: "#503D74",
    fontSize: 15,
    fontFamily: "roboto-regular",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  selection: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#503D74",
    padding: 8,
    fontSize: 16,
    marginTop: "3%",
    fontFamily: "roboto-bold",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    height: "3em",
    padding: 10,
    height: "100%",
  },
  hr: {
    borderBottomColor: "#c4c4c4",
    borderBottomWidth: 1,
    marginTop: 25,
    width: "100%",
    borderColor: "#503D74",
  },
  switch: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.25,
  },
  notes: {
    height: "50%",
    color: "#503D74",
    padding: "2%",
  },
});

export default Date;
