import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Initial Input Fields Empty", () => {
  render(<App />);
  const getInputEmailElement = screen.getByRole("textbox");
  expect(getInputEmailElement.value).toBe("");
  const getPasswordElement = screen.getByLabelText("Password");
  expect(getPasswordElement.value).toBe("");
  const getConfirmPasswordElement = screen.getByLabelText("Confirm Password");
  expect(getConfirmPasswordElement.value).toBe("");
});

test("Type In Email Field", () => {
  render(<App />);
  const emailInputElement = screen.getByRole("textbox", {
    name: /email/i,
  });
  userEvent.type(emailInputElement, "hello@gmail.com");
  expect(emailInputElement.value).toBe("hello@gmail.com");
});

test("Type In Password Field", () => {
  render(<App />);
  const passwordInputElement = screen.getByLabelText("Password");
  userEvent.type(passwordInputElement, "12345678");
  expect(passwordInputElement.value).toBe("12345678");
});

test("Type In Confirm Password Field", () => {
  render(<App />);
  const confirmPasswordInputElement = screen.getByLabelText("Confirm Password");
  userEvent.type(confirmPasswordInputElement, "1234567");
  expect(confirmPasswordInputElement.value).toBe("1234567");
});

test("Email Error", () => {
  render(<App />);
  const errorElement = screen.queryByText("Email Is Not Valid");
  const errorInputEmail = screen.getByRole("textbox", {
    name: "Email address",
  });
  const submitButton = screen.getByRole("button", {
    name: "Submit",
  });
  expect(errorElement).not.toBeInTheDocument();
  userEvent.type(errorInputEmail, "hellogmail.com");
  userEvent.click(submitButton);
  const errorElementAgain = screen.queryByText("Email Is Not Valid");
  expect(errorElementAgain).toBeInTheDocument();
});
