import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext<any | null>(null);

export default function ThemeApp() {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        count,
      }}
    >
      <Form />
      <button onClick={() => setCount(count + 1)}>增加</button>
      {/* <button onClick={() => handleClick()}>change</button> */}
    </ThemeContext.Provider>
  );
}
// const Form: React.FC = () => {
//   return (
//     <>
//       <h1>WelCome</h1>
//       <Theme />
//     </>
//   );
// };
class Form extends React.Component {
  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    return false;
  }
  render(): React.ReactNode {
    console.log("render Form");

    return (
      <>
        <h1>WelCome</h1>
        <Theme />
      </>
    );
  }
}

const Theme: React.FC = () => {
  const { theme, setTheme, count } = useContext(ThemeContext);
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <h2>{count}</h2>
      <h2>{theme}</h2>
      <button onClick={() => handleClick()}>change</button>
    </div>
  );
};
