interface aboutProps {
  title: string;
  paragraphs: string[];
}

function About({ paragraphs, title }: aboutProps) {
  return (
    <section>
      {paragraphs.map((graph, index) => (
        <p key={index}>{graph}</p>
      ))}
    </section>
  );
}

export { About };
