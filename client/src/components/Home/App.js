import {BrowserRouter as Router , Route} from 'react-router-dom';
import UserCard from './Home';
function App() {
  return (
    <Router>
      <Route path='/' exact component= {UserCard} />
    </Router> 
  );
}

export default App;
