import React from "react";
import "./App.css";
import "./index.css";
import Heder from "./components/Heder";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <Heder />
      <Home />
    </div>
  );
}
