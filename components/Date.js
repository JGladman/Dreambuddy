/** JavaScript file for specific date page */

import React, { useState } from "react";
import { StyleSheet, Text, Switch, View, TextInput, TouchableOpacity } from "react-native";

const Page = () => {
    const [text, onChangeText] = React.useState(null);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);

    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.back}>
                    <Text>Back</Text>
                </TouchableOpacity>            
            </View>
            <View >
                <Text style={styles.date}>Thursday, March 4</Text>
            </View>
            <View >
                <Text style={styles.text}>Recording goes here</Text>
            </View>
            <View style={styles.hr}></View>
            <View >
                <Text style={styles.text} >Dream Characterization</Text>
            </View>

            {/* didn't work */}
            <View>
                <View  style ={styles.fixToText}>
                    <View style={styles.selection}>
                        <Text style={styles.label}>Positive</Text>
                    </View>
                    <View style={styles.switch}>
                        <Switch
                            trackColor={{ false: "#7664CE", true: "#BAB1E7" }}
                            thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        /> 
                    </View>
                    <View style={styles.selection} >
                        <Text style ={styles.label}>Negative</Text>
                    </View>
                </View>

                <View  style ={styles.fixToText}>
                    <View style={styles.selection}>
                        <Text style={styles.label}>Realistic</Text>
                    </View>
                    <View style={styles.switch} >
                        <Switch
                            trackColor={{ false: "#7664CE", true: "#BAB1E7" }}
                            thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch2}
                            value={isEnabled2}
                        /> 
                    </View>
                    <View style={styles.selection} >
                        <Text style ={styles.label}>Unrealistic</Text>
                    </View>
                </View>

                <View  style ={styles.fixToText}>
                    <View style={styles.selection}>
                        <Text style={styles.label}>Lucid</Text>
                    </View>
                    <View style={styles.switch} >
                        <Switch
                            trackColor={{ false: "#7664CE", true: "#BAB1E7" }}
                            thumbColor={isEnabled3 ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch3}
                            value={isEnabled3}
                        /> 
                    </View>
                    <View style={styles.selection} >
                        <Text style ={styles.label}>Not Lucid</Text>
                    </View>
                </View>

                <View  style ={styles.fixToText}>
                    <View style={styles.selection}>
                        <Text style={styles.label}>Short</Text>
                    </View>
                    <View style={styles.switch} >
                        <Switch
                            trackColor={{ false: "#7664CE", true: "#BAB1E7" }}
                            thumbColor={isEnabled4 ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch4}
                            value={isEnabled4}
                        /> 
                    </View>
                    <View style={styles.selection} >
                        <Text style ={styles.label}>Long</Text>
                    </View>
                </View>
            </View>

            <View style={styles.hr}></View>
            <View>
                <Text style={styles.text} >Notes</Text>
            </View>
            <View style={{padding: 8, flex:3}}>
                <TextInput multiline style={styles.input} onChangeText={onChangeText} value={text} placeholder="Type Here"></TextInput>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        padding: "1.5em",
        fontFamily: "Proxima Nova",
    },
    back: {
        padding: '1em'
    },
    button: {
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: "#7664CE",
        padding: 10,
        alignItems: "center",
        paddingTop: 12
    },
    date: {
        fontSize: 25,
        fontWeight: "bold",
        padding: 8
    },
    label : {
        color: '#292929',
        fontSize: 15,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8
    },
    selection: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: '#292929',
        padding: 8,
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 20
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        height: "3em",
        padding: 10,
        height: "100%",
    },
    hr: {
        borderBottomColor: '#292929',
        borderBottomWidth: 1,
        marginTop: 25,
        width: "100%"
    },
    switch: {
        alignItems: "center",
        justifyContent: "center",
        flex: 0.25
    },

})

export default Page;