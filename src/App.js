import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Neon from './TwentyTwentyTwo/Neon';
import HoverHeart from './TwentyTwentyTwo/HoverHeart';
import Scrolling from './TwentyTwentyTwo/Scrolling';
import NightDay from './TwentyTwentyTwo/NightDay'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <div className="art-gallery">
        <NightDay/>
        <Scrolling/>
        <HoverHeart/>
        <Neon/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
