import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavigationBar from './components/Navbar';
import References from './components/References';
import './style/app.scss';

function App() {
  return (
    <div>
      <NavigationBar />
      <About />
      <References />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
