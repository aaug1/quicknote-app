import ReactDOM from "react-dom";
import App from "./App";
import {CssBaseline} from "@material-ui/core";

ReactDOM.render(
  <>
    <CssBaseline /> {/* resets the default styling of browser and normalizes styles */}
    <App />
  </>,
  document.getElementById("root")
);
