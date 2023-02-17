import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import Transactions from './components/Transactions';
import Income from './components/Income';
import Expenses from './components/Expenses';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/transactions' element={<Transactions />}/>
        <Route path='/income' element={<Income />} />
        <Route path='/expenditure' element={<Expenses />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
