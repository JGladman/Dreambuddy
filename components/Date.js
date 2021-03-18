/** JavaScript file for specific date page */

import React from "react";
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from "react-native";


const Page = () => {
    const [text, onChangeText] = React.useState(null);

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
            <View style={styles.hr}></View>
            <View >
                <Text style={styles.text} >Dream Characterization</Text>
            </View>

            {/* disable button when clicked, put in button group??? */}
            <View style={styles.selection}>
                <View style={styles.fixToText}>
                    <View style={styles.list}>
                        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Left button pressed')}>Positive</TouchableOpacity>
                    </View>
                    <View style={styles.list}>
                        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Left button pressed')}>Negative</TouchableOpacity>
                    </View>          
                </View>
                <View style={styles.fixToText}>
                    <View style={styles.list}>
                        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Left button pressed')}>Realistic</TouchableOpacity>
                    </View>
                    <View style={styles.list}>
                        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Left button pressed')}>Unrealistic</TouchableOpacity>
                    </View>              
                </View>
                <View style={styles.fixToText}>
                    <View style={styles.list}>
                        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Left button pressed')}>Happy</TouchableOpacity>
                    </View>
                    <View style={styles.list}>
                        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Left button pressed')}>Sad</TouchableOpacity>
                    </View>                 
                </View>
                <View style={styles.fixToText}>
                    <View style={styles.list}>
                        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Left button pressed')}>Short</TouchableOpacity>
                    </View>
                    <View style={styles.list}>
                        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Left button pressed')}>Long</TouchableOpacity>
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
        fontFamily: "Arial",
    },
    back: {
        padding: '1em'
    },
    button: {
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: "azure",
        padding: 10,
        alignItems: "center",
        paddingTop: 12
    },
    date: {
        fontSize: 25,
        fontWeight: "bold",
        padding: 8
    },
    list: {
        flex: 1,
        padding: 8
    },
    fixToText: {
        flexDirection: 'row',
    },
    selection: {
        flexDirection: 'column',
    },
    text: {
        color: 'grey',
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
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginTop: 25,
        width: "100%"
    }
})

export default Page;