import React, { Component } from "react";
import { Alert } from "react-native";
import moment from "moment";
import Calendar from "../Calendar/Calendar";
import SetAlarm from "../SetAlarm/SetAlarm";
import RecordingPage from "../Recording/RecordingPage";
import Date from "../Analysis/Date";
import EmptyDate from "../Analysis/EmptyDate";
import { Audio } from "expo-av";

export const Context = React.createContext();

export class Provider extends Component {
  state = {
    pageStr: "calendar",
    page: <Calendar />,
    dateSelected: null,
    uris: {},
    markedDates: {},
    recording: false,
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          setAlarm: (test) => {
            if (this.state.recording) {
              Alert.alert(
                "Error",
                "Please stop recording before navigating to another page"
              );
            } else {
              this.setState({
                pageStr: "alarm",
                page: <SetAlarm />,
              });
            }
          },
          setCalendar: () => {
            if (this.state.recording) {
              Alert.alert(
                "Error",
                "Please stop recording before navigating to another page"
              );
            } else {
              this.setState({
                pageStr: "calendar",
                page: <Calendar />,
              });
            }
          },
          setRecording: () => {
            if (this.state.recording) {
              Alert.alert(
                "Error",
                "Please stop recording before navigating to another page"
              );
            } else {
              this.setState({
                pageStr: "recording",
                page: <RecordingPage />,
              });
            }
          },
          setDate: () => {
            if (this.state.recording) {
              Alert.alert(
                "Error",
                "Please stop recording before navigating to another page"
              );
            } else {
              this.setState({
                pageStr: "date",
                page: <Date />,
              });
            }
          },
          setEmpty: () => {
            if (this.state.recording) {
              Alert.alert(
                "Error",
                "Please stop recording before navigating to another page"
              );
            } else {
              this.setState({
                pageStr: "empty",
                page: <EmptyDate />,
              });
            }
          },
          addURI: (uri, date) => {
            const newURIs = this.state.uris;
            newURIs[date] = uri;
            this.setState({
              uris: newURIs,
            });
            console.log(this.state.uris);
          },
          setDateSelected: (date) => {
            this.setState({
              dateSelected: date,
            });
          },
          setContextRecording: (recording) => {
            this.setState({
              recording: recording,
            });
          },
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
