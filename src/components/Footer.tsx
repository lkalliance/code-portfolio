import { Stack, Link } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ justifyContent: "center", marginBottom: "12px" }}
      >
        <Link href="./images/lee-klusky-resume.pdf" target="_blank">
          Résumé
        </Link>
        <Link href="https://github.com/lkalliance" target="_blank">
          GitHub
        </Link>
        <Link href="https://www.linkedin.com/in/lee-klusky/" target="_blank">
          LinkedIn
        </Link>
        <Link
          href="https://stackoverflow.com/users/20736476/lkalliance"
          target="_blank"
        >
          StackOverflow
        </Link>
      </Stack>
      You never finish coding. You just run out of time.
    </footer>
  );
}

export { Footer };
