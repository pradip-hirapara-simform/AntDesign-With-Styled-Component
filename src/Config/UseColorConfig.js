import {  useState } from "react";
import { CustomTheme } from "./themeColor"; 

function useColorConfig() {
  const [themeColor, setThemeColor] = useState(CustomTheme.Default);
 
  const handleChange = (value) => { 
    if (value === 'black') {
      setThemeColor(CustomTheme.Default)
    }
    if (value === 'green') {
      setThemeColor(CustomTheme.Green) 
    }
    if (value === 'red') { 
      setThemeColor(CustomTheme.Red)
    } 
  };

  return [handleChange, themeColor];
}
export { useColorConfig };
