import React, { useEffect } from 'react';
import './App.css';
import {useState} from 'react';
import Sidebar from "./components/sidebar.jsx";
import Dashboard from "./components/dashboard.jsx";
import AllStudents from "./components/allStudents.jsx";
import AddStudent from "./components/addStudent.jsx";
import EditStudent from "./components/editStudent.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  let dash = {
    monthly: 50000,
    annual: 250000,
    tasks: 29,
    pending: 18
  };
  // const url = "https://61c41903f1af4a0017d992f0.mockapi.io/students"; --> for using mock API data
  // let [students,setStudents] = useState([
  //   {
  //     name:"Goutam Mohanty",
  //     std:"X",
  //     section:"A",
  //     email:"gmty@redmail.com"
  //   },
  //   {
  //     name:"Ramesh Bottlewala",
  //     std:"X",
  //     section:"C",
  //     email:"opener@dmail.com"
  //   },
  //   {
  //     name:"Kaju Katliwala",
  //     std:"VII",
  //     section:"C",
  //     email:"sweety@hmail.com"
  //   },
  //   {
  //     name:"Varun Singh",
  //     std:"III",
  //     section:"B",
  //     email:"grover@rmail.com"
  //   }
  // ]); --> for using hard programmed data
  let [students,setStudents] = useState([]);

  return <>
    <BrowserRouter>
      <div className="row">
        <div className="container col-3">
          <Sidebar/>
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/dashboard" element={<Dashboard data={dash}/>}/>
            <Route path="/add-student" element={<AddStudent/>}/>
            <Route path="/all-students" element={<AllStudents/>}/>
            <Route path="/edit-student/:i" element={<EditStudent/>}/>
            <Route path="/" element={<Dashboard data={dash} />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>  
  </>
}

export default App;