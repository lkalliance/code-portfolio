import "./About.css";
import { useEffect } from "react";
import { Box } from "@mui/material";

interface aboutProps {
  small: boolean;
}

function About({ small }: aboutProps) {
  useEffect(() => {
    // this effect changes the page title
    document.title = "Lee Klusky: About Me";
  });

  return (
    <section id="about">
      <div>
        <img
          src="./images/lee_head_shot.png"
          className="headshot"
          alt="Lee Klusky"
          width={small ? "65px" : "100px"}
          height={small ? "65px" : "100px"}
        />
        <a
          href="https://www.credly.com/badges/60c743d7-bae3-47c5-bb7f-9c80a40ec7c0/public_url"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./images/full-stack-web-development-certificate-coding-boot-camp.png"
            className="badge"
            alt="Credly full stack web development badge"
          />
        </a>
        <a
          href="https://www.credly.com/badges/d0db0faf-a143-459f-9268-147c55ad36ab/public_url"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./images/pcep-30-02-pcep-certified-entry-level-python-programmer.png"
            className="badge"
            alt="Credly full stack web development badge"
          />
        </a>
        <a
          href="https://bcert.me/bc/html/show-badge.html?b=smvcklwt"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="./images/seal-csm.png"
            className="badge"
            alt="Scrum Alliance ScrumMaster Certificate"
          />
        </a>
      </div>
      <Box>
        <Box
          key="0"
          sx={
            small
              ? { marginBottom: "20px", lineHeight: "1.2em" }
              : { marginBottom: "20px", lineHeight: "1.6em" }
          }
        >
          I've worn many hats. I've been in desktop publishing, athletics
          publicity, software training and support, writing, and most especially
          front end web coding in which I was trained at Yahoo! Sports. I've
          worked for educational institutions, for startups, for small companies
          and for major corporations. It's time for a new hat.
        </Box>

        <Box
          key="1"
          sx={
            small
              ? { marginBottom: "20px", lineHeight: "1.2em" }
              : { marginBottom: "20px", lineHeight: "1.6em" }
          }
        >
          As a graduate of the University of Minnesota Full Stack Coding
          Bootcamp, I have experience in all the areas I've mentioned above, in
          addition to the latest in Javascript, CSS, HTML, jQuery, Node.js, SQL,
          MongoDB and React.
        </Box>
        <h3>About this Portfolio</h3>
        <Box
          key="2"
          sx={
            small
              ? { marginBottom: "20px", lineHeight: "1.2em" }
              : { marginBottom: "20px", lineHeight: "1.6em" }
          }
        >
          I coded this portfolio in React.js. I used Material UI and React
          Router DOM as supplemental technologies. I created the parallax effect
          on the portfolio page using React Scroll Paraallax. I coded the
          backgroud animation using CSS animations.
        </Box>
      </Box>
    </section>
  );
}

export { About };
