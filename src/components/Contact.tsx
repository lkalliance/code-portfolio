import { Alert } from "./Alert";
import { useState } from "react";
import { validateEmail } from "../utils";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailAlert, setEmailAlert] = useState(true);
  const [nameAlert, setNameAlert] = useState(true);
  const [messageAlert, setMessageAlert] = useState(true);

  const toggleAlert = (
    field: string,
    value: string,
    callback: (val: boolean) => void
  ) => {
    const doSet =
      (field === "email" && (value.length === 0 || !validateEmail(value))) ||
      value.length === 0;
    callback(doSet);
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    handler: (val: boolean) => void
  ) => {
    const { id, value } = e.target;
    toggleAlert(id, value, handler);
    return id === "name" ? setName(value) : setEmail(value);
  };

  const handleText = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    handler: (val: boolean) => void
  ) => {
    const { id, value } = e.target;
    toggleAlert(id, value, handler);
    return setMessage(value);
  };

  const handleFormSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const alertText =
      emailAlert || messageAlert || nameAlert
        ? "One or more fields is incorrectly filled out"
        : `${name} at email ${email} said, "${message}"`;
    alert(alertText);
  };

  return (
    <section>
      <h3>Contact Me</h3>
      <form>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => handleInput(e, setNameAlert)}
        />
        <Alert current={nameAlert} message="Please provide a name" />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => handleInput(e, setEmailAlert)}
        />
        <Alert
          current={emailAlert}
          message="Please provide a valid email address"
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          onChange={(e) => handleText(e, setMessageAlert)}
        ></textarea>
        <Alert current={messageAlert} message="Please provide a message" />
        <button type="submit" onClick={handleFormSubmit}>
          Send
        </button>
      </form>
    </section>
  );
}

export { Contact };
