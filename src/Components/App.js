import '../Styles/App.css';
import Header from "./Header"
import Home from "./Home"
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
