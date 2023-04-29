interface aboutProps {
  title: string;
  paragraphs: string[];
}

function About( { paragraphs, title }: aboutProps ) {
  
  return (
    <section>
      <h3>{title}</h3>
      { paragraphs.map((graph) => <p>{graph}</p>)} 
    </section>
  )
}

export { About };
