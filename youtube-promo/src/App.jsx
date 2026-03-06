import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Topics from './components/Topics';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Hero />
        <About />
        <Topics />
      </main>
      <Footer />
    </div>
  );
}

export default App;
