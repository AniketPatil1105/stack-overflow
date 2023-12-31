//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Allroutes from './Allroutes';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);


  return (
    <div className="App">
      <Router>
         <Navbar />
         <Allroutes />
      </Router>
       
    </div>
  );
}

export default App;
