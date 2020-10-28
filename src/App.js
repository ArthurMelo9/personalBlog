import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './containers/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactMe from './containers/ContactMe';
import Post from './containers/Posts';
import AboutMe from './containers/AboutMe';
import Links from './containers/Links';
import Gallery from './containers/Gallery';
import Login from './components/Login';
import CreateBlogPost from './components/CreateBlogPost';
import Newpostform from './containers/Posts/Newpostform';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/contactMe" component={ContactMe} />
        <Route path="/post/:postId" exact component={Post} />
        <Route path="/aboutMe" component={AboutMe} />
        <Route path="/links" component={Links} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/logIn" component={Login} />
        <Route path="/createblogpost" exact component={CreateBlogPost} />
        <Route path="/newpost" exact>
          <Newpostform />
        </Route>
      </div>
    </Router>

  );
}

export default App;
