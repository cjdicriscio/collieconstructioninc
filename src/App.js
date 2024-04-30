import Navbar from './components/Navbar';
import Route from './components/Route';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col bg-black">
      <Navbar />
      <div className="col-span-4">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Footer />
      </div>
    </div>
  );
}

export default App;
