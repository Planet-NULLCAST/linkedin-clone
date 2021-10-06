import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
function App() {
  return (
    <Router className="App">
      <Route path='/' exact component= {Home} />
      <Route path='/Signup' exact component= {Signup} />
      <Route path='/Signin' exact component= {Signin} />
    </Router> 
  );
}

export default App;
