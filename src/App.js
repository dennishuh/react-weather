import React from 'react';
import Nav from './components/Nav';

const App = (props) => {
  return (
    <div>
      <Nav />
      <h2>Wrapper Component</h2>
      {props.children}
    </div>
  );
}

export default App;
