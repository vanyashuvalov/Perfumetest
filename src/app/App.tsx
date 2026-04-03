import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { Ingredients } from './components/Ingredients';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Experience />
      <Ingredients />
      <Footer />
    </div>
  );
}
