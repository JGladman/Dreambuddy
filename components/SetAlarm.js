import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, SafeAreaView, View, Button, Platform, Switch } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from './Header';
import Navbar from './Navbar';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

const SetAlarm = () => {

    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    // For notifications
    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener);
            Notifications.removeNotificationSubscription(responseListener);
        };
    }, []);


    const [date, setDate] = useState(new Date()); // Sets time in datetime picker

    // onChange listener schedules notification when user changes time
    const onChange = (event, selectedDate) => {
        validateTime(selectedDate);
        Notifications.cancelAllScheduledNotificationsAsync(); // Cancel any previously scheduled notifications
        schedulePushNotification(selectedDate); // Schedule notification for time entered
    };

    // Ensure that alarm is scheduled for the future
    const validateTime = (input) => {
        let now = new Date();
        let interval = (input.getTime() - now.getTime());
        if (interval <= 0) { // Specified time has already passed for today
            input.setDate(input.getDate() + 1); // Set alarm for the next day instead
        }
        else if (interval > 86400000){ // Remove extra day that may have been added on
            input.setDate(input.getDate() - 1); // Set alarm for current day if time has not yet passed
        }
        setDate(input); // Update datetime picker
    }

    // Alarm toggle
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => {
        if (isEnabled == true){ // Turn toggle off, cancel any scheduled notifications
            Notifications.cancelAllScheduledNotificationsAsync();
        }
        else if (isEnabled != true) { // Turn toggle on, schedule alarm for time displayed on the picker
            Notifications.cancelAllScheduledNotificationsAsync(); // Cancel any previously scheduled notifications
            validateTime(date);
            schedulePushNotification(date);
        }
        setIsEnabled(previousState => !previousState); // Visibly change toggle
    }

    // Stylesheet
    const styles = StyleSheet.create({
        container: {
            alignItems: "center", // centers content on screen horizontally
            width: "100%",
            height: "100%",
            flexDirection: "column",
        },
        rowContainer: {
            flexDirection: "row",
            alignItems: "center", // aligns label to centre-line of toggle
            justifyContent: "space-between",
        },
        label: {
            paddingRight: 20, // gives space between label and toggle
            fontSize: 20,
        },
        h1: {
            fontSize: 35,
            flex: 1,
            paddingTop: "10%",
        },
        timePicker: {
            flex: 1,
            width: 100,
        },
        toggleContainer: {
            flex: 1,
            justifyContent: "center",
            paddingBottom: "50%",
        },
        headerWrapper: {
            paddingTop: "15%",
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerWrapper}>
                <Header/>
            </View>
            <Text style={styles.h1}>Set Alarm</Text>
            <View style={styles.timePicker}>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={"time"}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            </View>

            <View style={styles.toggleContainer}>
                <View style={styles.rowContainer}>
                    <Text style={styles.label}>Active:</Text>
                    <Switch
                        trackColor={{ false: "#C4C4C4", true: "#7664CE" }}
                        thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                        ios_backgroundColor="#C4C4C4"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            <Navbar />
        </SafeAreaView>
    );
};

// For notifications
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

// Notification template
async function schedulePushNotification(time) {
    var trigger = time;
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Good Morning!",
            body: 'Press this notification and start dictating your dreams.',
            sound: true,
        },
        trigger,
    });
}

// Ensures user can receive notifications
async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }
    return token;
} 


export default SetAlarm;