import "./Resume.css";
import { useEffect } from "react";
import { Box, Link, List, ListItem, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from "@mui/icons-material/Mail";
import LinkIcon from "@mui/icons-material/Link";
import SchoolIcon from "@mui/icons-material/School";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

function Resume() {
  useEffect(() => {
    document.title = "Lee Klusky: Résumé";
  });

  return (
    <section id="resume">
      <Box className="heading">
        <Typography component="h2">Lee Klusky</Typography>
        <Typography component="p" className="heading">
          Twin Cities, Minnesota, USA
        </Typography>
        <Typography component="p" className="heading">
          425.221.0122
        </Typography>
        <Typography component="p" className="heading">
          <MailIcon />
          <Link href="mailto:lkalliance@icloud.com">lkalliance@icloud.com</Link>
          <LinkIcon />
          <Link href="https://www.linkedin.com/in/lee-klusky" target="_blank">
            https://www.linkedin.com/in/lee-klusky
          </Link>
        </Typography>
      </Box>
      <Typography component="p">
        Technology-oriented customer relationship manager with 15+ years of
        experience in product development, product testing, product
        demonstration, and client training and support
      </Typography>

      <Typography component="h3">
        <WorkIcon />
        Work Experience
      </Typography>
      <Box className="heading">
        <Typography component="h4">Software Training and Support</Typography>
        <Typography component="p">December 2010 to January 2023</Typography>
        <Typography component="p">
          BioTelemetry / Philips - Eagan, MN
        </Typography>
        <List>
          <ListItem>
            Oversaw technical support for all customers by using active
            listening and friendly professionalism to uphold positive brand
            image
          </ListItem>
          <ListItem>
            Provided Training and support for client users of the Fusion heart
            monitoring software from 2010 through 2022, and for Millennia holter
            software from 2018 through 2023
          </ListItem>
        </List>
      </Box>
      <Box className="heading">
        <Typography component="h4">Web-Based Application Developer</Typography>
        <Typography component="p">December 2010 to January 2023</Typography>
        <Typography component="p">
          BioTelemetry / Philips - Eagan, MN
        </Typography>
      </Box>
      <List>
        <ListItem>
          Inherited a platform that had been released in beta form and led
          development through three releases
        </ListItem>
        <ListItem>
          Successfully added over a dozen product features most in demand from
          users, without sacrificing platform stability
        </ListItem>
        <ListItem>
          Managed product roadmap, JavaScript development, and validation of all
          released versions
        </ListItem>
      </List>
      <Typography component="h3">
        <WorkIcon />
        Additional Experience
      </Typography>
      <Typography component="p">
        <Typography component="strong">Front End Engineer</Typography> - Yahoo!,
        Mountain View, CA
      </Typography>
      <Typography component="p">
        <Typography component="strong">Project Manager</Typography> -
        Rivals.com, Brentwood, TN
      </Typography>
      <Typography component="p">
        <Typography component="strong">
          Trainer, Editor, Data manager
        </Typography>{" "}
        - Rivals.com, Seattle, WA
      </Typography>
      <Typography component="p">
        <Typography component="strong">Publications Director</Typography> -
        Santa Clara University Athletic Department, Santa Clara, CA
      </Typography>
      <Typography component="h3">
        <DesignServicesIcon />
        Skills
      </Typography>
      <List>
        <ListItem>Expert in HTML, CSS and JavaScript</ListItem>
        <ListItem>
          Familiar with Node, Express, React, MySQL, MongoDB, jQuery, Bootstrap
        </ListItem>
        <ListItem>
          Proficient in customer relations and technical support
        </ListItem>
        <ListItem>Project management</ListItem>
        <ListItem>Creative problem-solving</ListItem>
        <ListItem>Written communication</ListItem>
        <ListItem>Presenting - 10+ years</ListItem>
      </List>
      <Typography component="h3">
        <SchoolIcon />
        Education
      </Typography>
      <Typography component="h4">Full Stack Coding Bootcamp</Typography>
      <Typography component="p">
        Currently earning a certificate from the University of Minnesota in full
        stack software development, covering both front end
        (HTML/CSS/JavaScript/React) and back end (Node.js, Express, MySQL,
        MongoDB)
      </Typography>
      <Typography component="h4">University of California</Typography>
      <Typography component="p">
        Political Economy (degree incomplete)
      </Typography>
      <Typography component="p">Berkley, CA</Typography>
    </section>

    // <section id="materials">
    //   <Stack
    //     direction="column"
    //     spacing={2}
    //     sx={{ width: "250px", margin: "20px auto" }}
    //   >
    //     <Button
    //       variant="contained"
    //       href="./images/lee-klusky-resume.pdf"
    //       rel="noreferrer"
    //       target="_blank"
    //     >
    //       Résumê
    //     </Button>
    //     <Button
    //       variant="contained"
    //       href="https://github.com/lkalliance"
    //       rel="noreferrer"
    //       target="_blank"
    //     >
    //       GitHub
    //     </Button>
    //     <Button
    //       variant="contained"
    //       href="https://www.linkedin.com/in/lee-klusky/"
    //       rel="noreferrer"
    //       target="_blank"
    //     >
    //       LinkedIn
    //     </Button>
    //   </Stack>
    // </section>
  );
}

export { Resume };
