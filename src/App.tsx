import React from 'react';
import MoviesButton from './Components/MoviesButton';
import ItemsList from './Components/ItemsList';

function App() {

  return (
    <div className="App">
      <MoviesButton />
      <ItemsList category={'movies'} />
    </div>
  );
}

export default App;
