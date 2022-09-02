import React, { useState } from 'react';
import './App.css';
import MoviesViewSection from './Components/MoviesViewSection/MoviesViewSection';
import Header from './Components/Header/Header';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const inputValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  return (
    <>
      <Header inputValueChanged={(e: React.ChangeEvent<HTMLInputElement>) => inputValueChanged(e)} />
      <MoviesViewSection movieKeyWord={inputValue} />
    </>
  );
}

export default App;
