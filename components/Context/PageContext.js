// import React, { useState } from "react";
// import Calendar from "../Calendar/Calendar";
// import Date from "../Analysis/Date";
// import EmptyDate from "../Analysis/EmptyDate";
// import Recording from "../Recording/RecordingPage";
// import SetAlarm from "../SetAlarm/SetAlarm";

// const initialState = { page: <SetAlarm /> };
// export const PageContext = React.createContext();

// // export const PageProvider = ({ children }) => {
// //   [page, setPage] = useState(<Calendar />);

// //   return (
// //     <PageContext.Provider
// //       value={{
// //         state: this.page,
// //         changePage: (page) => {
// //           this.setPage(page);
// //         },
// //       }}
// //     >
// //       {children}
// //     </PageContext.Provider>
// //   );
// // };

// export const PageProvider = ({ children }) => {
//   // const [state, dispatch] = useReducer((state, action) => {
//   //   switch (action.page) {
//   //     case "calendar":
//   //       console.log(state);
//   //       return <Calendar />;
//   //     case "analysis":
//   //       return <Date />;
//   //     case "empty":
//   //       return <EmptyDate />;
//   //     case "recording":
//   //       console.log(state);
//   //       return <Recording />;
//   //     case "set":
//   //       console.log(state);
//   //       return <SetAlarm />;
//   //     default:
//   //       throw new Error();
//   //   }
//   // }, initialState);

//   // return <Provider value={{ state, dispatch }}>{children}</Provider>;

//   const [state, setState] = useState(initialState);

//   return (
//     <PageContext.Provider
//       value={{ state, setPage: (page) => setState({ page: page }) }}
//     >
//       {children}
//     </PageContext.Provider>
//   );
// };

// // import React, { useState, createContext } from "react";
// // import SetAlarm from "../../components/SetAlarm/SetAlarm";

// // export const PageContext = createContext();

// // export const PageProvider = ({ children }) => {
// //   const [state, setState] = useState({
// //     page: <SetAlarm />,
// //   });
// //   return (
// //     <PageContext.Provider value={{ state, setState }}>
// //       {children}
// //     </PageContext.Provider>
// //   );
// // };

// Working one
import React, { Component } from "react";
import Calendar from "../Calendar/Calendar";
import SetAlarm from "../SetAlarm/SetAlarm";
import RecordingPage from "../Recording/RecordingPage";
import Date from "../Analysis/Date";
import EmptyDate from "../Analysis/EmptyDate";

export const Context = React.createContext();

export class Provider extends Component {
  state = {
    pageStr: "empty",
    page: <EmptyDate />,
    dateSelected: "",
    uri: "",

    // TODO:   Dictionary of key-value pairs:
    //         key: uri
    //         value: date recorded
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          setAlarm: (test) => {
            console.log(test);
            this.setState({
              pageStr: "alarm",
              page: <SetAlarm />,
            });
          },
          setCalendar: () => {
            this.setState({
              pageStr: "calendar",
              page: <Calendar />,
            });
          },
          setRecording: () => {
            this.setState({
              pageStr: "recording",
              page: <RecordingPage />,
            });
          },
          setDate: () => {
            this.setState({
              pageStr: "date",
              page: <Date />,
            });
          },
          setEmpty: () => {
            this.setState({
              pageStr: "empty",
              page: <EmptyDate />,
            });
          },
          setURI: (uri) => {
            this.setState({
              uri: uri,
            });
          },
          // TODO: Date Selected
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
