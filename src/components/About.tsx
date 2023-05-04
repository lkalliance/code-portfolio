import { useEffect } from "react";

interface aboutProps {
  title: string;
  paragraphs: string[];
}

function About({ paragraphs, title }: aboutProps) {
  useEffect(() => {
    document.title = "Lee Klusky: About Me";
  });

  return (
    <section>
      <img
        src="./images/lee_head_shot.png"
        className="headshot"
        alt="Lee Klusky"
      />
      {paragraphs.map((graph, index) => (
        <p key={index}>{graph}</p>
      ))}
    </section>
  );
}

export { About };
