import React from 'react';
import Add from './Add';
import Main from './Main';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path="/" component={Main} exact/>
      <Route path="/add" component={Add} />
    </div>
  );
}

export default App;