import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavigationBar from './components/Navbar';
import References from './components/References';
import BackToTop from "react-back-to-top";
import './style/app.scss';

function App() {
  return (
    <div>
      <div className='background-img'></div>
      
      <BackToTop
    mainStyle={{
        width:'100%',
        height:'100%',
        background:'url(...)'
    }}
    percentStyle={{
        width:'100%',
        height:'100%',
    }}
    animate='rotate'
    offsetTop={20}
    step={50}
    percent={false}
    visiblePercent={50}
  />
      <NavigationBar />
      <About />
      <References />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
