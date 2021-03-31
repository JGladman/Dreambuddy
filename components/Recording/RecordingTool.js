import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { Icon } from "react-native-elements";
import { Audio } from "expo-av";
import { Context } from "../Context/PageContext";

export default function RecordingTool() {
  const [recording, setRecording] = React.useState();
  const [active, setActive] = React.useState(false);

  async function startRecording() {
    try {
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
    const { sound } = await Audio.Sound.createAsync(
      { uri: uri },
      { shouldPlay: true }
    );
    // console.log("Playing Sound");
    // sound.setVolumeAsync(1);
    // await sound.playAsync();
    //console.log("Recording stored at", uri);
    return uri;
  }
  /*
        async function playSound() {
            console.log('Loading Sound');
            const {sound} = await Audio.Sound.createAsync(
                { uri: stopRecording()},
                { shouldPlay: true }
            );
            setSound(sound);
        
            console.log('Playing Sound');
            await sound.playAsync(); 
        
        }
    */

  return (
    <Context.Consumer>
      {(context) => (
        <View>
          <View style={styles.container}>
            {active ? (
              <TouchableOpacity
                style={styles.recordingbutton}
                onPress={async () => {
                  const uri = await stopRecording();
                  context.setURI(uri);
                  const { sound } = await Audio.Sound.createAsync(
                    { uri: context.state.uri },
                    { shouldPlay: true }
                  );
                  console.log("Playing Sound");
                  sound.setVolumeAsync(1);
                  await sound.playAsync();
                }}
              >
                <Icon name="microphone" size={130} type="material-community" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.recordingbutton}
                onPress={() => {
                  startRecording();
                  console.log(context.state.uri);
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
    //alignItems: "center",
    //justifyContent: "center",
  },
});
