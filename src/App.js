import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Shipment from './Component/Shipment/Shipment';
import { useState } from 'react';
import { createContext } from 'react';
import ReducerCount from './Component/ReducerCount/ReducerCount';
import PataintReducer from './Component/PataintReducer/PataintReducer';
import PatientManagement from './Component/PatientManagement/PatientManagement';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('laptop');
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      {/* <Header/>
      <Home/>
      <Shipment/>
      <ReducerCount/> */}
      <PatientManagement/>
    </CategoryContext.Provider>
  );
}

export default App;
