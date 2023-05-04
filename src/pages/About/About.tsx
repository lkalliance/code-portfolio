import "./About.css";
import { useEffect } from "react";
import { Box } from "@mui/material";

interface aboutProps {
  title: string;
  paragraphs: string[];
}

function About({ paragraphs, title }: aboutProps) {
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
          <Box key={index} sx={{ marginBottom: "20px", lineHeight: "1.6em" }}>
            {graph}
          </Box>
        ))}
      </Box>
    </section>
  );
}

export { About };
