import Button from "@mui/material/Button";

function Materials() {
  return (
    <section id="materials">
      <h3>Professional Materials:</h3>

      <Button
        variant="contained"
        href="/images/lee-klusky-resume.pdf"
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
    </section>
  );
}

export { Materials };
