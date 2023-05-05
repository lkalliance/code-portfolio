interface techProps {
  techs: string[];
  repo: string;
}

function TechList({ techs }: techProps) {
  // takes in a list of technologies as strings and renders the list
  return (
    <div className="techs">
      {techs.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </div>
  );
}

export { TechList };
