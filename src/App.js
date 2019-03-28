import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import 'font-awesome/css/font-awesome.css';

import NavBar from './components/NavBar';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer'
import { Instagram } from './components/InstaFeed';
import InstaEmbedo from './components/InstaFeed/embedo.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state={navBarShrink:""};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event){
    const domNode = ReactDOM.findDOMNode(this.navEl);
    const nbs = window.pageYOffset>100 ? "navbar-shrink" : "";
    this.setState({navBarShrink:nbs});
  }

  render() {
    const nbs = this.state ? this.state.navBarShrink : "";
    return (
      <div>
        <NavBar navBarShrink = {nbs} />
        <Header />
        <Timeline />
        <Team />
        <Contact />
        <Footer />
        <Instagram />
        <InstaEmbedo />
      </div>
    );
  }
}

export default App;
