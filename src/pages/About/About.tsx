import "./About.css";
import { useEffect } from "react";
import { Box } from "@mui/material";

interface aboutProps {
  small: boolean;
  paragraphs: string[];
}

function About({ paragraphs, small }: aboutProps) {
  useEffect(() => {
    document.title = "Lee Klusky: About Me";
  });

  return (
    <section id="about">
      <img
        src="./images/lee_head_shot.png"
        className="headshot"
        alt="Lee Klusky"
      />
      <Box>
        {paragraphs.map((graph, index) => (
          <Box
            key={index}
            sx={
              small
                ? { marginBottom: "20px", lineHeight: "1.2em" }
                : { marginBottom: "20px", lineHeight: "1.6em" }
            }
          >
            {graph}
          </Box>
        ))}
      </Box>
    </section>
  );
}

export { About };
