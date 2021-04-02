import React from "react";
import { View, StyleSheet } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Context } from "../Context/PageContext";

const CalendarPage = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <View style={styles.container}>
          <Calendar
            theme={calendarStyle}
            onDayPress={(day) => context.setDate()}
          />
        </View>
      )}
    </Context.Consumer>
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
