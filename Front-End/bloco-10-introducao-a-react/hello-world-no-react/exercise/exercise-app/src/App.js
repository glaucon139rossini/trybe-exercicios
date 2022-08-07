import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
