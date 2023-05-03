import "./App.css";
import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { TabContext } from "@mui/lab";
import {
  Header,
  Footer,
  About,
  Contact,
  Portfolio,
  Resume,
} from "./components";
import { getPage } from "./utils";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import aboutMe from "./data/about.json";

function App() {
  const pageNum = getPage(window.location.href);
  const [page, setPage] = useState(pageNum);
  const { paragraphs } = aboutMe;

  const handleChange = (e: React.SyntheticEvent, newPage: string) => {
    setPage(newPage);
  };

  return (
    <Router>
      <div className="App">
        <Header title="Lee Klusky Coding Portfolio" />
        <TabContext value={page}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              aria-label="Portfolio navigation"
              onChange={handleChange}
              value={page}
              variant="fullWidth"
            >
              <Tab
                label="About Me"
                component={Link}
                to="/about"
                value="about"
              />
              <Tab
                label="Portfolio"
                component={Link}
                to="/portfolio"
                value="portfolio"
              />
              <Tab
                label="Résumé"
                component={Link}
                to="/resume"
                value="resume"
              />
              <Tab
                label="Contact Me"
                component={Link}
                to="/contact"
                value="contact"
              />
            </Tabs>
          </Box>
        </TabContext>
        <Footer />
        <Routes>
          <Route
            path="/"
            element={<About paragraphs={paragraphs} title="About Me" />}
          />
          <Route
            path="/about"
            element={<About paragraphs={paragraphs} title="About Me" />}
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
