import '../css/App.css';
import Navbar from './Navbar';
import ProfileCard from './ProfileCard';
import MeetingCard from './MeetingCard';
import AddTodo  from './AddTodo';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navbar />
      <div className="card-container">
       {/* <ProfileCard />
       <MeetingCard /> */}
       {/* <AddTodo /> */}
      </div>

<Routes>
  <Route path='/' element={  <div className="card-container"> <AddTodo /> </div>} />
</Routes>

    </div>
  );
}

export default App;
