import React, { useState } from 'react';
import Home from './pages/Home';
import BusStations from './pages/BusStations';
import NearbyBus from './pages/NearbyBus';
import PassengerTransport from './pages/PassengerTransport';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/BusStations' element={<BusStations />} />
            <Route path='/NearbyBus' element={<NearbyBus />} />
            <Route path='/PassengerTransport' element={<PassengerTransport />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
