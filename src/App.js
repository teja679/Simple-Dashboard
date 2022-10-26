import './App.css';
import Activities from './Pages/Activites/Activities';
import Dashboard from './Pages/Dashboard/Dashboard';
import Header from './Pages/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Activities />
    </div>
  );
}

export default App;
