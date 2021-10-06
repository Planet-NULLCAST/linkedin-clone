import {BrowserRouter as Router , Route} from 'react-router-dom';
import UserCard from './components/Home/Home';
function App() {
  return (
    <Router className="App">
      <Route path='/' exact component= {UserCard} />
    </Router> 
  );
}

export default App;
