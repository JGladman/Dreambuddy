import React from "react";
import RecordingTool from "../Recording/RecordingTool";
//const Context = React.createContext(uri);

class uriRetrival extends Component {
  constructor() {
    super();
  }
  static contextType = Context;
  render() {
    const current = RecordingTool[this.context];
    uri = current;
    return (
      <uriRetrival style={styles.container}>
        <p>uri</p>
      </uriRetrival>
    );
  }
}
export default Context;
