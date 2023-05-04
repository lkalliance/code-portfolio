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
  Materials,
} from "./components";
import { getPage } from "./utils";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import aboutMe from "./data/about.json";

function App() {
  const pageNum = getPage(window.location.href);
  const [page, setPage] = useState(pageNum);
  const { paragraphs } = aboutMe;
  const isSmall = useMediaQuery({ query: "(max-width: 480px)" });

  const handleChange = (e: React.SyntheticEvent, newPage: string) => {
    setPage(newPage);
  };

  return (
    <Router>
      <div className={isSmall ? "App small" : "App big"}>
        <header>
          <Header title="Lee Klusky Coding Portfolio" />
          <TabContext value={page}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                aria-label="Portfolio navigation"
                onChange={handleChange}
                value={page}
                centered
              >
                <Tab
                  label="Portfolio"
                  component={Link}
                  to="/portfolio"
                  value="portfolio"
                />
                <Tab
                  label={isSmall ? "About" : "About Me"}
                  component={Link}
                  to="/about"
                  value="about"
                />
                <Tab
                  label="Materials"
                  component={Link}
                  to="/materials"
                  value="materials"
                />
                <Tab
                  label={isSmall ? "Contact" : "Contact Me"}
                  component={Link}
                  to="/contact"
                  value="contact"
                />
              </Tabs>
            </Box>
          </TabContext>
        </header>
        <Footer />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route
            path="/about"
            element={<About paragraphs={paragraphs} title="About Me" />}
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
