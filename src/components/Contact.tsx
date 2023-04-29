function Contact() {
  
  return (
    <section>
      <h3>Contact Me</h3>
      <form>
        <label htmlFor="Name">Name</label>
        <input type="text" id="Name" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message"></textarea>
        <button type="submit" onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          alert('Sending a message');
        }}>Send</button>
      </form>
    </section>
  )
}

export { Contact };
