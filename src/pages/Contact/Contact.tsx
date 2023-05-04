import "./Contact.css";
import { useState, useEffect } from "react";
import { validateEmail } from "../../utils";
import { TextField, Box, Button } from "@mui/material";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailAlert, setEmailAlert] = useState(false);
  const [nameAlert, setNameAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState(false);

  useEffect(() => {
    document.title = "Lee Klusky: Contact Me";
  });

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
      emailAlert ||
      email.length === 0 ||
      name.length === 0 ||
      message.length === 0
        ? "One or more fields is incorrectly filled out"
        : `${name} at email ${email} said, "${message}"`;
    alert(alertText);
  };

  return (
    <section id="contact">
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
            helperText={nameAlert ? "Name is required" : " "}
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
            type="email"
            helperText={emailAlert ? "A valid email is required" : " "}
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
            helperText={messageAlert ? "A message is required" : " "}
            onChange={handleInput}
            onBlur={() => {
              toggleAlert("message", message, setMessageAlert);
            }}
          />
          <Button
            variant="contained"
            disabled={
              emailAlert ||
              email.length === 0 ||
              name.length === 0 ||
              message.length === 0
            }
            onClick={handleFormSubmit}
          >
            Send
          </Button>
        </div>
      </Box>
    </section>
  );
}

export { Contact };
