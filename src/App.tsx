import React from 'react';
import useFetch from './hooks/useFetch.hook';
import { ICountry, useStore } from "./stores/Store";
import Header from "./components/parts/Header/Header";
import TabList from "./components/parts/TabList";
import * as SBase from './components/ui/base.styled';

const App: React.FC = () => {
  const store = useStore();
	const [response, isError, isLoading] = useFetch<ICountry>("https://cdn.utopiamusic.com/code-test/frontend/countries.json");
  React.useEffect(() => {
    response && store.setCountries(response);
  }, [response]);

  return (
    <>
      <Header/>
      <TabList/>
    </>
  );
}

export default App;
