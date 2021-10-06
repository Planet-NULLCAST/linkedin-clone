import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './components/Home/Home';
function App() {
  return (
    <Router className="App">
      <Route path='/' exact component= {Home} />

    </Router> 
  );
}

export default App;
