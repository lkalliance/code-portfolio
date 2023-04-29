import { useState } from 'react';
import './App.css';
import { Header, About, Contact, Portfolio, Resume, Footer } from './components';
import aboutMe from './data/about.json';

function App() {
  const [ page, setPage ] = useState("About")
  const { paragraphs } = aboutMe;
  return (
    <div className="App">
      <Header page={page} title="Lee Klusky Coding Portfolio" onChoice={(page:string) => setPage(page)} />

      { page==="About" ? (
        <About paragraphs={paragraphs} title="About Me" />
      ) : "" }
      { page==="Contact Me" ? (
        <Contact />
      ) : "" }
      { page==="Résumé" ? (
        <Resume />
      ) : "" }
      { page==="Portfolio" ? (
        <Portfolio />
      ) : "" }
      
      <Footer />
    </div>
  );
}

export default App;
