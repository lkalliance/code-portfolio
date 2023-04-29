import samples from '../data/projects.json';
import { Card } from './Card';


const { projects } = samples

function Portfolio() {
  return (
    <section>
      <h3>Portfolio</h3>
      {projects.map((project, index) => { return (
        <Card
          key={index}
          title={project.title}
          url={project.url}
          repo={project.repo}
          shortDescription={project.shortDescription}
          description={project.description}
          image={project.image}
          techs={project.techs}
        />
      )})}
    </section>
  )
}

export { Portfolio };
