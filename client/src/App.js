import {BrowserRouter as Router , Route} from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import UserCard from './components/user-card/user-card';
import Post  from './components/user-posts/post';
import Navbar  from './components/navbar';
function App() {
  return (
    <Router className="App">
      <Route path='/' exact component= {UserCard} />
      <Route path='/Signup' exact component= {Signup} />
      <Route path='/Signin' exact component= {Signin} />
      <Route path='/post' exact component= {Post} />
      <Route path='/navbar' exact component= {Navbar} />
    </Router> 
  );
}

export default App;
