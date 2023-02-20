import './App.css';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Auth from './components/Auth';
import Transactions from './components/transactions/Transactions';
import Income from './components/Income';
import Expenses from './components/Expenses';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/transactions' element={<Transactions />}/>
        <Route path='/income' element={<Income />} />
        <Route path='/expenses' element={<Expenses />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
