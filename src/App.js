import React, { useState, useContext } from 'react';
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

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#000000",
    background: "#222222",
  },
};

const ThemeContext = React.createContext(themes);


function App() {
  const theme = useContext(ThemeContext);
  const [style, setStyle] = useState({
    background: theme.light.background,
    foreground: theme.light.foreground,
  });
  const [color, setColor] = useState("dark");

  const changeThemeHandler = () => {
    if (color === "light") {
      setStyle({
        background: theme.dark.background,
        foreground: theme.dark.foreground,
      });
      setColor("dark");
    } else {
      setStyle({
        background: theme.light.background,
        foreground: theme.light.foreground,
      });
      setColor("light");
    }
  };

  return (
    <ThemeContext.Provider value={themes.dark}>
      <Router>
        <div style={{ background: style.background, color: style.foreground }} className="App">
          <Header />
          <Hero />

          <Route path="/" /*changeThemeHandler={changeThemeHandler}*/ exact component={Home} />
          <Route path="/contactMe" component={ContactMe} />
          <Route path="/post/:postId" exact component={Post} />
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/links" component={Links} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/logIn" component={Login} />
          <Route path="/createblogpost" exact component={CreateBlogPost} />
          <Route path="/newpost" changeThemeHandler={changeThemeHandler} exact>
            <Newpostform />
          </Route>
        </div>
      </Router>

    </ThemeContext.Provider>

  );
}

export default App;
