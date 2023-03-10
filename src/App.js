import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Auth from "./components/Auth";
import Transactions from "./components/transactions/Transactions";
import Income from "./components/income/Income";
import Calendar from "./components/Calendar";
import NotFound from "./components/NotFound";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import "./style/dark.css";
import { useGlobalContext } from "./store/globalContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const {darkMode} = useGlobalContext()
  return (
    <div className={darkMode ? "App dark" : 'App light'}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/income" element={<Income />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
