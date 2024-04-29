import Navbar from './components/Navbar';
import Route from './components/Route';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="col-span-5">
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
      </div>
    </div>
  );
}

export default App;
