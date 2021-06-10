
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Covid19 from './Covid19';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Covid19 />
        </BrowserRouter>
     </div>
  );
}

export default App;
