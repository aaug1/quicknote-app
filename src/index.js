import ReactDOM from "react-dom";
import App from "./App";
import {CssBaseline} from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router> {/* The <Router> component uses the Web history API to keep the app pages in sync with the URL. */}
    <CssBaseline /> {/* resets the default styling of browser and normalizes styles */}
    <App />
  </Router>,
  document.getElementById("root")
);
