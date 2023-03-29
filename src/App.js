import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <h2>React Crud Operations</h2>
        <div>
          <Routes>
            <Route exact path='/create' element={<Create />} />
            <Route exact path='/read' element={<Read />} />
            <Route exact path='/update' element={<Update />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
