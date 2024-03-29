import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";

import ManufacturerForm from "./ManufacturerForm";
import ManufacturersList from "./ManufacturersList";
import VehicleModelForm from "./VehicleModelForm";
import VehicleModelList from "./VehicleModelList";
import TechForm from "./TechForm";
import ServiceForm from "./ServiceAppointmentForm";
import AutomobileForm from "./AutomobileForm";
import TechniciansList from "./TechniciansList";
import AppointmentsList from "./ServiceAppointmentList";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers" element={<ManufacturersList />} />
          <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="/models" element={<VehicleModelList />} />
          <Route path="/models/new" element={<VehicleModelForm />} />
          <Route path="/automobiles/new" element={<AutomobileForm />} />
          <Route path="/technicians" element={<TechniciansList />} />
          <Route path="/technicians/new" element={<TechForm />} />
          <Route path="/appointments" element={<AppointmentsList />} />
          <Route path="/appointments/new" element={<ServiceForm />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
