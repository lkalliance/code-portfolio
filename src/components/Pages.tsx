import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";
import { About, Contact, Portfolio, Materials } from "../components";
import aboutMe from "../data/about.json";

function Pages() {
  const { paragraphs } = aboutMe;
  const [page, setPage] = useState("1");

  const handleChange = (e: React.SyntheticEvent, newPage: string) => {
    setPage(newPage);
  };
  return (
    <TabContext value={page}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          aria-label="Portfolio navigation"
          onChange={handleChange}
          value={page}
          variant="fullWidth"
        >
          <Tab label="About Me" value="1" />
          <Tab label="Portfolio" value="2" />
          <Tab label="Résumé" value="3" />
          <Tab label="Contact Me" value="4" />
        </Tabs>
      </Box>
      <TabPanel value="1">
        <About paragraphs={paragraphs} title="About Me" />
      </TabPanel>
      <TabPanel value="2">
        <Portfolio />
      </TabPanel>
      <TabPanel value="3">
        <Materials />
      </TabPanel>
      <TabPanel value="4">
        <Contact />
      </TabPanel>
    </TabContext>
  );
}

export { Pages };
