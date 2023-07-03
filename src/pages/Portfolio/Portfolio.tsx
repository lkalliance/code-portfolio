import "./Portfolio.css";
import { useEffect } from "react";
import samples from "../../data/projects.json";
import { ProjectCard, PageTitle } from "../../components";
import { ParallaxBanner } from "react-scroll-parallax";

const { projects } = samples;

function Portfolio() {
  useEffect(() => {
    // this effect changes the page title
    document.title = "Lee Klusky: Portfolio";
  });

  return (
    <section id="portfolio">
      {/* <PageTitle image="./images/code-background.jpg" title="Code Samples" /> */}
      {/* iterate over the list of projects and create cards */}
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
