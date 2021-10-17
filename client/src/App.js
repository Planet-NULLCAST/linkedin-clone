import {BrowserRouter as Router , Route} from 'react-router-dom';
import postDetails from './components/post-details/postDetails';
import Signin from './components/Signin';
import Signup from './components/Signup';
import UserCard from './components/user-card/user-card';
function App() {
  return (
    <Router className="App">
      <Route path='/' exact component= {UserCard} />
      <Route path='/Signup' exact component= {Signup} />
      <Route path='/Signin' exact component= {Signin} />
      <Route path='/po' exact component= {postDetails} />
    </Router> 
  );
}

export default App;
