import React from 'react';
import Header from "./components/parts/Header/Header";
import TabListContainer from "./containers/TabListContainer"

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <TabListContainer/>
    </>
  );
}

export default App;
