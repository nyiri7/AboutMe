import React from 'react';
import { ThemeProvider, CssBaseline} from '@mui/material';
import { theme } from './resources/Theme';


import Header from './header/Header';
import Welcome from './welcome/Welcome';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';



function App() {



  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header scrollToSection={scrollToSection} />
      <Welcome scrollToSection={scrollToSection} />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </ThemeProvider>
  );
}

export default App;