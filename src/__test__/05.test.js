import {screen, render as rtlRender} from "@testing-library/react";
import {ContextExample, ThemeContextProvider} from "../components/Context";
import userEvent from "@testing-library/user-event";

/**
 * Takeaways:
 * 1) Overriding render method to include Wrapper
 * https://testing-library.com/docs/react-testing-library/api/#render-options
 * 2) Giving your Provider a initial value in options for testing
 */
function render(ui, {initialTheme = "light", ...options} = {}) {
  const Wrapper = ({children}) => <ThemeContextProvider initialTheme={initialTheme}>{children}</ThemeContextProvider>;

  return rtlRender(ui, {wrapper: Wrapper, ...options});
}

test("should change dark theme to light theme", () => {
  const {container} = render(<ContextExample />, {initialTheme: "light"});
  const sun = screen.getByText(/🌞/i);
  expect(document.querySelector("body")).toHaveClass("light");
  expect(sun).toBeInTheDocument();

  userEvent.click(sun);

  const moon = screen.getByText(/🌕/i);
  expect(moon).toBeInTheDocument();
  expect(document.querySelector("body")).toHaveClass("dark");
});

test("should change light theme to dark theme", () => {
  const {container} = render(<ContextExample />, {initialTheme: "dark"});

  const moon = screen.getByText(/🌕/i);
  expect(document.querySelector("body")).toHaveClass("dark");
  expect(moon).toBeInTheDocument();

  userEvent.click(moon);

  const sun = screen.getByText(/🌞/i);
  expect(sun).toBeInTheDocument();
  expect(document.querySelector("body")).toHaveClass("light");
});
