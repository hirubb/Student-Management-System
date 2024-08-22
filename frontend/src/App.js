
import './App.css';
import CounterClass from './components/CounterClass';
import Counterfunction from './components/CounterFunction';
import Header  from './components/Header';
import AddStudent from './components/AddStudent';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import AllStudents from './components/AllStudents';


function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Header />
          
          <Routes>
            <Route path="/add" element={<AddStudent />} />
            <Route path="/" element={<AllStudents/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
  }

  export default App;
