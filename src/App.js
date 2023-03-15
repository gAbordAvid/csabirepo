import About from './components/About';
import Contact from './components/Contact';
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
    </div>
  );
}

export default App;
