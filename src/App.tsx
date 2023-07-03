import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Box, Tabs, Tab } from "@mui/material";
import { TabContext } from "@mui/lab";
import { Header, Footer } from "./components";
import { About, Portfolio, Contact, Resume } from "./pages";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import aboutMe from "./data/about.json";

function App() {
  const { paragraphs } = aboutMe;
  const isSmall = useMediaQuery({ query: "(max-width: 480px)" });
  const { pathname } = useLocation();

  return (
    <ParallaxProvider>
      <div className={isSmall ? "App small" : "App big"}>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <header>
          <Header title="Lee Klusky Coding Portfolio" />
          <TabContext value={pathname}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs aria-label="Portfolio navigation" value={pathname} centered>
                <Tab
                  label={isSmall ? "About" : "About Me"}
                  component={Link}
                  to="/about"
                  value="/about"
                />
                <Tab
                  label="Portfolio"
                  component={Link}
                  to="/portfolio"
                  value="/portfolio"
                />
                <Tab
                  label={isSmall ? "Contact" : "Contact Me"}
                  component={Link}
                  to="/contact"
                  value="/contact"
                />
                <Tab
                  label={"Résumé"}
                  component={Link}
                  to="/resume"
                  value="/resume"
                />
              </Tabs>
            </Box>
          </TabContext>
        </header>
        <Footer />
        <Routes>
          {/* defaulting to the "About" tab */}
          <Route
            path="/"
            element={<About paragraphs={paragraphs} small={isSmall} />}
          />
          <Route index element={<Navigate to="/about" />} />

          <Route
            path="/about"
            element={<About paragraphs={paragraphs} small={isSmall} />}
          />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={<About paragraphs={paragraphs} small={isSmall} />}
          />
        </Routes>
      </div>
    </ParallaxProvider>
  );
}

export default App;
