import React from 'react';
import './App.css';
import useFetch from './hooks/useFetch.hook';
import { ICountry } from "./stores/Store"

const App: React.FC = () => {
	const [response, isError, isLoading] = useFetch<ICountry>("https://cdn.utopiamusic.com/code-test/frontend/countries.json");
  console.log(response)
  return (
    <div className="App">
      <p>test</p>
    </div>
  );
}

export default App;
