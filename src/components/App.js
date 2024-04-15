import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from './Header'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      < Header setIsDarkMode={onDarkModeClick} isDarkMode={isDarkMode}/>
      < ShoppingList items={itemData} />
    </div>
  );
}

export default App;
