import React, { useState } from "react";
import Header from "./components/Header";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";
import Footer from "./components/Footer";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCalculator,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCalculator, faPlus, faMinus);

function App() {
  // Créer un état toujours dans App.js
  // Destructuring du tableau ->
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Header />
      <div className="count">
        <Decrement value={counter} substract={setCounter} />
        <div className="purple">
          <p className="square">{counter}</p>
          <Reset value={counter} reset={setCounter} />
        </div>

        <Increment value={counter} add={setCounter} />
      </div>

      <Footer />
    </>
  );
}
export default App;
