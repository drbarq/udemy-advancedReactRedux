import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hi There!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain("Hi There!");

  ReactDOM.unmountComponentAtNode(div);
});
