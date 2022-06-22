import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Neon from './TwentyTwentyTwo/Neon';
import HoverHeart from './TwentyTwentyTwo/HoverHeart';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <div className="art-gallery">
        <HoverHeart/>
        <Neon/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
