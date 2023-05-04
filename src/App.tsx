import "./App.css";
import { Box, Tabs, Tab } from "@mui/material";
import { TabContext } from "@mui/lab";
import { Header, Footer } from "./components";
import { About, Portfolio, Contact, Materials } from "./pages";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import aboutMe from "./data/about.json";

function App() {
  const { paragraphs } = aboutMe;
  const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
  const { pathname } = useLocation();

  return (
    <div className={isSmall ? "App small" : "App big"}>
      <header>
        <Header title="Lee Klusky Coding Portfolio" />
        <TabContext value={pathname}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs aria-label="Portfolio navigation" value={pathname} centered>
              <Tab
                label="Portfolio"
                component={Link}
                to="/portfolio"
                value="/portfolio"
              />
              <Tab
                label={isSmall ? "About" : "About Me"}
                component={Link}
                to="/about"
                value="/about"
              />
              <Tab
                label={isSmall ? "Contact" : "Contact Me"}
                component={Link}
                to="/contact"
                value="/contact"
              />
            </Tabs>
          </Box>
        </TabContext>
      </header>
      <Footer />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route index element={<Navigate to="/portfolio" />} />

        <Route
          path="/about"
          element={<About paragraphs={paragraphs} small={isSmall} />}
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
