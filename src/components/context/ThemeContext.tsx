import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext<any | null>(null);

export default function ThemeApp() {
  const [theme, setTheme] = useState("light");
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <Form />
      {/* <button onClick={() => handleClick()}>change</button> */}
    </ThemeContext.Provider>
  );
}
const Form: React.FC = (): JSX.Element => {
  return (
    <>
      <h1>WelCome</h1>
      <Theme />
    </>
  );
};
const Theme: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <h2>{theme}</h2>
      <button onClick={() => handleClick()}>change</button>
    </div>
  );
};
