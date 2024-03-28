import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';

import ManufacturerForm from './ManufacturerForm';
import ManufacturersList from './ManufacturersList';
import VehicleModelForm from './VehicleModelForm';
import VehicleModelList from './VehicleModelList';
import TechForm from './TechForm';
import ServiceForm from './ServiceAppointmentForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="/manufacturers" element={<ManufacturersList />} />
          <Route path="/models/new" element={<VehicleModelForm />} />
          <Route path="/models" element={<VehicleModelList />} />
          <Route path='/technicians' element={<TechForm />} />
          <Route path='/appointments' element={<ServiceForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
