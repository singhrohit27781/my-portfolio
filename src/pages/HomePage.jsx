import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className="homepage bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default HomePage;
