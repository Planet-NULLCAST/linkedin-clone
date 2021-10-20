import {BrowserRouter as Router , Route} from 'react-router-dom';
import postDetails from './components/post-details/postDetails';
import Signin from './components/Signin';
import Signup from './components/Signup';
import UserCard from './components/user-card/user-card';
import Post  from './components/user-posts/post';
import Navbar  from './components/navbar';
import Home from './components/home/home';
function App() {
  return (
    <Router className="App">
      <Route path='/' exact component= {UserCard} />
      <Route path='/Signup' exact component= {Signup} />
      <Route path='/Signin' exact component= {Signin} />
      <Route path='/post' exact component= {Post} />
      <Route path='/navbar' exact component= {Navbar} />
      <Route path='/po' exact component= {postDetails} />
      <Route path='/home' exact component= {Home} />
    </Router> 
  );
}

export default App;
