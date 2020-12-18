import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

library.add(fas,fab,far);

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
