import React from "react";
import { View, StyleSheet } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

const CalendarPage = () => {
  return (
    <View style={styles.container}>
      <Calendar theme={calendarStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const calendarStyle = {};

export default CalendarPage;
