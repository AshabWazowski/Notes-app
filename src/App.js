import { Divider } from '@mui/material';
import './App.css';
import { Home, Navbar } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesPath from './routes';
function App() {
  return (
<div>
<Router>
<Navbar/>
<RoutesPath/>
</Router>
</div>
  );
}

export default App;
