import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Artwork from './components/pages/Artwork';
import About from './components/pages/About';

library.add(fas,fab,far);

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/Artwork' component={Artwork}/>
            <Route path='/About' component={About}/>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
