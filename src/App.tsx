import { useState } from 'react';
import './App.css';
import { Header, About, Contact, Portfolio, Resume, Footer } from './components';
const aboutMe = require('./data/about.json');

function App() {
  const [ page, setPage ] = useState("About")
  return (
    <div className="App">
      <Header page={page} title="Lee Klusky Coding Portfolio" onChoice={(page:string) => setPage(page)} />

      { page==="About" ? (
        <About text={ aboutMe.text } />
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
