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

export const PageContext = React.createContext();

export class PageProvider extends Component {
  state = {
    page: <Calendar />,
  };

  render() {
    return (
      <PageContext.Provider
        value={{
          state: this.state,
          setAlarm: () => {
            this.setState({
              page: <SetAlarm />,
            });
          },
          setCalendar: () => {
            this.setState({
              page: <Calendar />,
            });
          },
          setRecording: () => {
            this.setState({
              page: <RecordingPage />,
            });
          },
        }}
      >
        {this.props.children}
      </PageContext.Provider>
    );
  }
}
