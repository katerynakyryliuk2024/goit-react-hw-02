import { useState, useEffect } from "react";

import Description from "../Description/Description";
import css from "./App.module.css";
import Options from "../Options/Options";

export default function App() {
  return (
    <div className={css.container}>
      <Description />
      <Options />
    </div>
  );
}
