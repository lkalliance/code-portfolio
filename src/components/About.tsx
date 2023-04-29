interface aboutProps {
  text: string;
}

function About( { text }: aboutProps ) {
  
  return (
    <section>
      <h3>About Me</h3>
      {text} 
    </section>
  )
}

export { About };
