import React from "react";
// import { ThemeContext } from "./ThemeContext";
import { ThemeContext } from "./ThemeProvider";
import Button from "./Button";
import Hero from "./Hero";

/*
  TODO: implement a Consumer from your ThemeContext.
  with this consumer you can pass the function to toggle
  the theme to this button in the `onClick` prop.
*/

const App = () => (

  <ThemeContext.Consumer>
  {({ setTheme }) => (

    <Hero>
      <Button onClick={setTheme}>Theme Switcher</Button>
    </Hero>
  )}

</ThemeContext.Consumer>


  
);

export default App;
