import {BrowserRouter as Router , Route} from 'react-router-dom';
import postDetails from './components/post-details/postDetails';
import Signin from './components/Signin';
import Signup from './components/signUp/signup';
import UserCard from './components/user-card/user-card';
import Post  from './components/user-posts/post';
import Navbar  from './components/navbar';
import Home from './components/home/home';
import userName from './components/signUp/userName';
import UserLocation from './components/signUp/userLocation';
function App() {
  return (
    <Router className="App">
      <Route path='/usercard' exact component= {UserCard} />
      <Route path='/signup' exact component= {Signup} />
      <Route path='/signin' exact component= {Signin} />
      <Route path='/post' exact component= {Post} />
      <Route path='/navbar' exact component= {Navbar} />
      <Route path='/postdetails' exact component= {postDetails} />
      <Route path='/' exact component= {Home} />
      <Route path='/user' exact component= {userName} />
      <Route path='/location' exact component= {UserLocation} />
    </Router> 
  );
}

export default App;
