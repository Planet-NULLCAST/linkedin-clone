import {BrowserRouter as Router , Route} from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import UserCard from './components/user-card/user-card';
function App() {
  return (
    <Router className="App">
      <Route path='/' exact component= {UserCard} />
      <Route path='/Signup' exact component= {Signup} />
      <Route path='/Signin' exact component= {Signin} />
    </Router> 
  );
}

export default App;
