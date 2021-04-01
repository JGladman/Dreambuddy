/** JavaScript file for empty date page */

import React from "react";
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from "react-native";

const EmptyPage = () => {
    const [text, onChangeText] = React.useState(null);

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.back}>
                    <Text>Back</Text>
                </TouchableOpacity>            
            </View>
            <View >
                <Text style={styles.date}>Friday, March 5</Text>
            </View>
           
            <View >
                <Text style={styles.text} >No dream recorded. Add one now!</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        padding: "1.5em",
    },
    back: {
        padding: '1em',
        fontFamily: "roboto-regular",
    },
    date: {
        fontSize: 25,
        fontFamily: "roboto-bold",
        padding: 8
    },
    text: {
        color: 'grey',
        padding: 8,
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 20,
        fontFamily: "roboto-regular",
    },
})

export default EmptyPage;