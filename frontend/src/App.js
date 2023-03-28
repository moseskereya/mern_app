import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateStudent from "./components/CreateStudent"
import List from  "./components/ShowStudentList"

import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path='/' element={<List />} />
                    <Route exact path='/create-student' element={<CreateStudent/>} />
                    <Route exact path='/edit-student/:id' element = {<List/>}/>
                </Routes>
            </div>
      </Router>
  );
}

export default App;
