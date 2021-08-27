import React, {useEffect} from "react";
import Toggle from "react-toggle";
import "./index.css";

const ThemeContext = React.createContext();

function ThemeContextProvider({initialTheme = "light", ...props}) {
  const [theme, setTheme] = React.useState(initialTheme);
  return <ThemeContext.Provider value={[theme, setTheme]} {...props} />;
}

function useThemeContext() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeContextProvider");
  }
  return context;
}

const App = () => {
  return (
    <div>
      <ThemeContextProvider>
        <Example />
      </ThemeContextProvider>
    </div>
  );
};

const Example = () => {
  const [theme, setTheme] = useThemeContext();
  useEffect(() => {
    document.querySelector("body").className = theme;
  }, [theme]);

  return (
    <div>
      <Toggle
        checked={theme === "light" ? true : false}
        onChange={() => setTheme(() => (theme === "light" ? "dark" : "light"))}
        aria-label="theme-toggle"
        icons={{
          checked: "🌞",
          unchecked: "🌕",
        }}
      />
    </div>
  );
};

export {App as ContextApp, Example as ContextExample, ThemeContextProvider, useThemeContext};
