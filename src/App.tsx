import React from 'react';
import './App.css';
import Colors from './components/Colors';
import ContainerSpacing from './components/ContainerSpacing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Typography from './components/Typography';
import Sizing from './components/Sizing';
import Border from './components/Border';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          {/* <p className="text-yellow-400">ff</p>
      <Colors /> */}
          <Route path="/border" element={<Border />} />
          <Route path="/sizing" element={<Sizing />} /> 
          <Route path="/colors" element={<Colors />} />
          <Route path="/containerSpacing" element={<ContainerSpacing />} />
          <Route path="/typography" element={<Typography />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
