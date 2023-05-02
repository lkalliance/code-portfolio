import { Alert } from "./Alert";
import { useState } from "react";
import { validateEmail } from "../utils";
import { TextField, Box, Button } from "@mui/material";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailAlert, setEmailAlert] = useState(false);
  const [nameAlert, setNameAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState(false);

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

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    return id === "name"
      ? setName(value)
      : id === "email"
      ? setEmail(value)
      : setMessage(value);
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
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            error={nameAlert}
            variant="outlined"
            id="name"
            label="Name"
            helperText={nameAlert ? "Name is required" : ""}
            onChange={handleInput}
            onBlur={() => {
              toggleAlert("name", name, setNameAlert);
            }}
          />
          <TextField
            error={emailAlert}
            variant="outlined"
            id="email"
            label="Email"
            helperText={emailAlert ? "A valid email is required" : ""}
            onChange={handleInput}
            onBlur={() => {
              toggleAlert("email", email, setEmailAlert);
            }}
          />
          <TextField
            error={messageAlert}
            id="message"
            variant="outlined"
            label="Message"
            multiline
            rows={6}
            helperText={messageAlert ? "A message is required" : ""}
            onChange={handleInput}
            onBlur={() => {
              toggleAlert("message", message, setMessageAlert);
            }}
          />
          <Button
            variant="contained"
            disabled={emailAlert || messageAlert || nameAlert}
            onClick={handleFormSubmit}
          >
            Send
          </Button>
        </div>
      </Box>

      {/* <form>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="name"
          // onChange={(e) => handleInput(e, setNameAlert)}
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
      </form> */}
    </section>
  );
}

export { Contact };
