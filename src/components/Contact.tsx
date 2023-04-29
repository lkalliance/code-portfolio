import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log(e.target.id);
    return id === "name" ? setName(value) : setEmail(value);
  };

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    return setMessage(value);
  };

  const handleFormSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`${name} at email ${email} said, "${message}"`);
  };

  return (
    <section>
      <h3>Contact Me</h3>
      <form>
        <label htmlFor="Name">Name</label>
        <input type="text" id="name" onChange={handleInput} />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={handleInput} />
        <label htmlFor="message">Message</label>
        <textarea id="message" onChange={handleText}></textarea>
        <button type="submit" onClick={handleFormSubmit}>
          Send
        </button>
      </form>
    </section>
  );
}

export { Contact };
