import React from 'react';
import HomeContainer from './containers/HomeContainer';
import './App.css';
import HeaderContainer from './components/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
