interface techProps {
  techs: string[];
  repo: string;
}

function TechList({ techs, repo }: techProps) {
  return (
    <div className="techs">
      {techs.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </div>
  );
}

export { TechList };
