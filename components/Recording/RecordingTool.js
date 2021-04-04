import React from "react";
import moment from "moment";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

import { Icon } from "react-native-elements";
import { Audio } from "expo-av";
import { Context } from "../Context/PageContext";

export default function RecordingTool() {
  const [recording, setRecording] = React.useState();
  const [active, setActive] = React.useState(false);

  async function startRecording(uris, dateSelected) {
    const asyncAlert = () => {
      return new Promise((resolve, reject) => {
        Alert.alert(
          "Overwrite Dream",
          `There has already been a dream recorded for ${moment(
            dateSelected,
            "YYYY-MM-DD"
          ).format("dddd, MMMM Do, YYYY")}, would you like to overwrite it?`,
          [
            {
              text: "Overwrite",
              onPress: () => {
                resolve(true);
              },
            },
            {
              text: "Cancel",
              style: "cancel",
              onPress: () => {
                resolve(false);
              },
            },
          ]
        );
      });
    };

    try {
      if (recording) {
        await stopRecording();
      }
      let save = true;
      for (let date in uris) {
        if (date === dateSelected) {
          save = await asyncAlert();
        }
      }
      if (save) {
        console.log("Requesting permissions..");
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        console.log("Starting recording..");
        setActive(true);
        const recording = new Audio.Recording(); //variable store the new recording
        await recording.prepareToRecordAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );
        await recording.startAsync();
        setRecording(recording);
        console.log("Recording started");
        console.log(recording);
        return save;
      }
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    setActive(false);
    setRecording(recording);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); //saves the recording in the URI
    setRecording(null);
    return uri;
  }

  return (
    <Context.Consumer>
      {(context) => (
        // EMILY: Wherever you want to access the date for the current recording use this: moment(context.state.dateSelected, "YYYY-MM-DD").format("dddd, MMMM Do, YYYY")
        <View>
          <View style={styles.container}>
            {active ? (
              <TouchableOpacity
                style={styles.recordingbutton}
                onPress={async () => {
                  const uri = await stopRecording();
                  context.addURI(uri, context.state.dateSelected);
                  const { sound } = await Audio.Sound.createAsync(
                    { uri: uri },
                    { shouldPlay: true }
                  );
                  console.log("Playing Sound");
                  sound.setVolumeAsync(1);
                  await sound.playAsync();
                  context.setContextRecording(false);
                }}
              >
                {/* <Icon name="microphone" size={130} type="material-community" /> */}
                <Image
              style={styles.image}
              source={require("../../assets/moon-only.jpg")}
            />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.recordingbutton}
                onPress={() => {
                  const recording = startRecording(
                    context.state.uris,
                    context.state.dateSelected
                  );
                  context.setContextRecording(recording);
                }}
              >
                <Icon name="microphone" size={130} type="material-community" />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </Context.Consumer>
  );
}
//<Button title="Play Sound" onPress={playSound} />
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  recordingbutton: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  stop: {
    width: "25%",
    height: "25%",
    alignItems: "center",
    flexDirection: "row",
  },

  buttonbg: {
    width: "100%",
  },
});
