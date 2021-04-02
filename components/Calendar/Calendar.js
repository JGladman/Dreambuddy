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
            theme={{
              textDisabledColor: 'white',
              textSectionTitleColor: '#c9c9c9', // days of week, grey
              selectedDayTextColor: '#503d74', // number when tapped, dark purple
              todayTextColor: '#9279b9', // today's number, light purple
              dayTextColor: '#503d74', // number, dark purple
              dotColor: '#fee375', // small dot, yellow
              arrowColor: '#503d74', // arrows, dark purple
              monthTextColor: '#503d74', // month, dark purple
              textDayFontFamily: "roboto-regular",
              textMonthFontFamily: "roboto-bold",
              textDayHeaderFontFamily: 'roboto-regular',
              textMonthFontSize: 20,
            }}
            markedDates={{
              '2021-04-05': {marked: true, dotColor: '#fee375'},
              '2021-04-06': {marked: true, dotColor: '#fee375'},
              '2021-04-07': {marked: true, dotColor: '#fee375'},
              '2021-04-20': {marked: true, dotColor: '#fee375'},
              '2021-04-21': {marked: true, dotColor: '#fee375'},
              '2021-04-22': {marked: true, dotColor: '#fee375'},
              '2021-04-23': {marked: true, dotColor: '#fee375'},
              }}
            style={{
              transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
              borderRadius: 13,
              height: "85%",
              }}
            onDayPress={(day) => context.setDate()}
          />
        </View>
      )}
    </Context.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#503d74",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const calendarStyle = {};

export default CalendarPage;
