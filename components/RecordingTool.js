import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button} from "react-native";
import {Icon} from "react-native-elements";
import { Audio, AVPlaybackStatus } from 'expo-av';

export default function RecordingTool() {
    const [recording, setRecording] = React.useState();
  
    async function startRecording() {
      try {
        console.log('Requesting permissions..');
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        }); 
        console.log('Starting recording..');
        const recording = new Audio.Recording(); //variable store the new recording 
        await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        await recording.startAsync(); 
        setRecording(recording);
        console.log('Recording started');
      } catch (err) {
        console.error('Failed to start recording', err);
      }
    }
  
    async function stopRecording() {
      console.log('Stopping recording..');
      setRecording(recording);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI(); //saves the recording in the URI
      console.log('Loading Sound');
        const {sound} = await Audio.Sound.createAsync(
            { uri: uri},
            { shouldPlay: true }
        );
        //Audio.Sound.setSound(sound);
    
        console.log('Playing Sound');
        sound.setVolumeAsync(1);
        await sound.playAsync(); 
    console.log('Recording stopped and stored at', uri);
    //return uri;
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
        <View>
            <View style={styles.container}>
              <TouchableOpacity style={styles.recordingbutton} onPress={startRecording}>
                <Icon name="microphone" size ={130} type="material-community" />
              </TouchableOpacity>
              </View>        
            <View style = {styles.stop}>
            <Button
                title="Stop"
                color ="#C4C4C4"
                onPress={stopRecording}
                />
            </View>
            <TouchableOpacity style={styles.stop} onPress={stopRecording}>
                <Text>Stop</Text>
            </TouchableOpacity> 
            
         </View>
             
           );
       };
  //<Button title="Play Sound" onPress={playSound} />  
    const styles = StyleSheet.create({
      container: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
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
        position: "absolute",
        bottom: 30, 
        right: 50,
        color: 'black',
      },
    
      buttonbg: {
        width: "100%",
        //alignItems: "center",
        //justifyContent: "center",
      }, 
    
    });


/*
export default function RecordingTool() {
    const [recording, setRecording] = React.useState();
  
    async function startRecording() {
      try {
        console.log('Requesting permissions..');
        await Audio.requestPermissionsAsync();
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        }); 
        console.log('Starting recording..');
        const recording = new Audio.Recording();
        await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        await recording.startAsync(); 
        setRecording(recording);
        console.log('Recording started');
      } catch (err) {
        console.error('Failed to start recording', err);
      }
    }
  
    async function stopRecording() {
      console.log('Stopping recording..');
      setRecording(undefined);
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI(); 
      console.log('Recording stopped and stored at', uri);
    }

    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.recordingbutton} onPress={startRecording}>
            <Icon name="microphone" size ={130} type="material-community" />
          </TouchableOpacity>
        <TouchableOpacity onPress={stopRecording}>
            <Text>Stop</Text>
        </TouchableOpacity>
     
        </View>  
       );
   };

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  recordingbutton: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonbg: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  }, 

});

//export default RecordingTool;
*/