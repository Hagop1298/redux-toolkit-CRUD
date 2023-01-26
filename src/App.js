import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './features/users/AddUser';
import EditUser from './features/users/EditUser';
import UsersList from './features/users/UsersList';

function App() {
  console.log("ghsfdhh");
  return (
    <div className='container mx-auto px-2 max-w-5xl pt-10 md:pt-32'>
      <h1 className='text-center dont-bold text-2xl text-gray-700'>CRUD with redux toolkit</h1>
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/edit-user/:id' element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
