interface aboutProps {
  title: string;
  paragraphs: string[];
}

function About({ paragraphs, title }: aboutProps) {
  return (
    <section>
      <img src="/images/lee_head_shot.png" className="headshot" />
      {paragraphs.map((graph, index) => (
        <p key={index}>{graph}</p>
      ))}
    </section>
  );
}

export { About };
