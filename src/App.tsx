import Hero from './components/Hero';
import About from './components/About';
import Solution from './components/Solution';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Trainer from './components/Trainer';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Solution />
      <Courses />
      <Testimonials />
      <Trainer />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
