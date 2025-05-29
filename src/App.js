import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
     
      <div className="main">
        <h1 className="main-header">React Crud Operations</h1>
        { <ul>
          <li>
            <Link to="/"><h3>Create</h3></Link>
          </li>
          <li>
            <Link to="/read"><h3>Read</h3></Link>
          </li>
          {/* <li>
            <Link to="/update">Update</Link>
          </li> */}
        </ul> }
       
      
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;