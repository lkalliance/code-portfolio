import { useEffect } from "react";
import { Button, Stack } from "@mui/material";

function Materials() {
  useEffect(() => {
    document.title = "Lee Klusky: Career Materials";
  });

  return (
    <section id="materials">
      <Stack
        direction="column"
        spacing={2}
        sx={{ width: "250px", margin: "20px auto" }}
      >
        <Button
          variant="contained"
          href="./images/lee-klusky-resume.pdf"
          rel="noreferrer"
          target="_blank"
        >
          Résumê
        </Button>
        <Button
          variant="contained"
          href="https://github.com/lkalliance"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </Button>
        <Button
          variant="contained"
          href="https://www.linkedin.com/in/lee-klusky/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </Button>
      </Stack>
    </section>
  );
}

export { Materials };
