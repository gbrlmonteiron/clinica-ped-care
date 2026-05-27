import { createBrowserRouter } from "react-router";
import { MainLayout } from "../components/layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import PatientForm from "./pages/PatientForm";
import PatientDetails from "./pages/PatientDetails";
import Appointments from "./pages/Appointments";
import MedicalRecord from "./pages/MedicalRecord";
import GrowthChart from "./pages/GrowthChart";
import Vaccination from "./pages/Vaccination";
import Prescriptions from "./pages/Prescriptions";
import Reports from "./pages/Reports";
import Alerts from "./pages/Alerts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "pacientes", Component: Patients },
      { path: "pacientes/novo", Component: PatientForm },
      { path: "pacientes/:id/editar", Component: PatientForm },
      { path: "pacientes/:id", Component: PatientDetails },
      { path: "agendamentos", Component: Appointments },
      { path: "prontuario/:id", Component: MedicalRecord },
      { path: "crescimento/:id", Component: GrowthChart },
      { path: "vacinacao/:id", Component: Vaccination },
      { path: "prescricoes", Component: Prescriptions },
      { path: "relatorios", Component: Reports },
      { path: "alertas", Component: Alerts },
    ],
  },
]);
