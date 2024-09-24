import logo from './logo.svg';
import './App.css';

import Banner from './Components/banner';
import Whoarewe from './Components/whoarewe';
import Featured from './Components/featured';
import Header from './Layout/header';
import Testimonials from './Components/testimonials';
import Ourleader from './Components/ourleader';
import Footer from './Layout/footer';
import Ourservice from './Components/ourservice';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Whoarewe />
      <Featured />
      {/* <Ourleader /> */}
      <Ourservice />
      <Testimonials />
      <Footer />


    </div>
  );
}

export default App;
