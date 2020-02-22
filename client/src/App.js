import React, {useState} from 'react';

import './App.css';
import DataFromExternalSource from './data.json';
import Header from './component/Header'
import Body from './component/Body'
export const APPLContext = React.createContext()

const App = () => {

  const [data, setdata] = useState(DataFromExternalSource)
  const [selectboxdataHeader, setselectboxdataHeader] = useState()
  
  console.log(data)
  return (
    <APPLContext.Provider value = {{data,selectboxdataHeader,setselectboxdataHeader}}>
      <div className="App">
        
        <Header />
        <Body />
        
      </div>
    </APPLContext.Provider>
  );
}

export default App;
