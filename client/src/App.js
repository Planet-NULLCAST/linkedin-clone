import { BrowserRouter as Router, Route } from "react-router-dom";
import postDetails from "./components/post-details/postDetails";
import signin from "./components/signin";
import signup from "./components/signUp/signup";
import UserCard from "./components/user-card/user-card";
import Post from "./components/user-posts/post";
import Navbar from "./components/navbar";
import Home from "./components/home/home";
import userName from "./components/signUp/userName";
import UserLocation from "./components/signUp/userLocation";
import LoginProvider from "./contexts/LoginContext";
function App() {
  return (
    <Router className="App">
      <LoginProvider>
      <Route path="/usercard" exact component={UserCard} />
      <Route path="/signup" exact component={signup} />
      <Route path="/signin" exact component={signin} />
      <Route path="/post" exact component={Post} />
      <Route path="/navbar" exact component={Navbar} />
      <Route path="/postdetails" exact component={postDetails} />
      <Route path="/" exact component={Home} />
      <Route path="/user" exact component={userName} />
      <Route path="/location" component={UserLocation} />
      </LoginProvider>
    </Router>
  );
}

export default App;
