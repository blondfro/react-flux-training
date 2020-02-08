import "bootstrap/dist/css/bootstrap-grid.min.css";
import React from "react";
import { render } from "react-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

render(<AboutPage/>, document.getElementById("root"));