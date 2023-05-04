import { useEffect } from "react";
import samples from "../data/projects.json";
import { ProjectCard } from "../components";

const { projects } = samples;

function Portfolio() {
  useEffect(() => {
    document.title = "Lee Klusky: Portfolio";
  });

  return (
    <section id="portfolio">
      {projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            title={project.title}
            url={project.url}
            repo={project.repo}
            shortDescription={project.shortDescription}
            description={project.description}
            image={project.image}
            techs={project.techs}
          />
        );
      })}
    </section>
  );
}

export { Portfolio };
