import "./About.css";
import { useEffect } from "react";
import { Box } from "@mui/material";

interface aboutProps {
  small: boolean;
  paragraphs: string[];
}

function About({ paragraphs, small }: aboutProps) {
  useEffect(() => {
    // this effect changes the page title
    document.title = "Lee Klusky: About Me";
  });

  return (
    <section id="about">
      <img
        src="./images/lee_head_shot.png"
        className="headshot"
        alt="Lee Klusky"
        width={small ? "65px" : "100px"}
        height={small ? "65px" : "100px"}
      />
      <Box>
        {/* iterate over the provided paragraphs and render each in a box */}
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
