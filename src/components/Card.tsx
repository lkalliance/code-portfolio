interface cardProps {
  title: string;
  url: string;
  repo: string;
  shortDescription: string;
  description: string;
  image: string;
  techs: string[];
}

function Card( { title, url, repo, shortDescription, description, image, techs }: cardProps ) {
  
  return (
    <div className="card">
        <h4>
            <a href={url} target="_blank" rel="noreferrer">{title}</a>
            <span>
                <a href={repo} target="_blank" rel="noreferrer">GitHub</a>
            </span>
        </h4>
        <p>
            { techs.map( (tech, index) => <span key={index}>tech</span> ) }
        </p>
        <p>{shortDescription}</p>
        <p>{description}</p>
    </div>
  )
}

export { Card };
