import React,{useState,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
const url = "https://61c41903f1af4a0017d992f0.mockapi.io/students";
function AllStudents(){

  // let allData = props.data;
  let [students,setStudents] = useState([]);
  useEffect(()=>{
    getData();
  },[]);

  let getData = async() =>{
    try{
      let response= await axios.get(url);
      setStudents(response.data)
    }
    catch(error){
      console.log("error", error)
    }
  }

  async function handleDelete(element){
    try{
      let response = await axios.delete(url+"/"+element);
      if(response.status == 200)
        getData();
    }
    catch(error){
      console.log("error",error)
    }
  }

  return <div className="container-fluid">
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>SNo</th>
          <th>Name</th>
          <th>Standard</th>
          <th>Section</th> 
          <th>Email</th>       
        </tr>
      </thead>
      <tbody>
        {
          students.map((e,i) =>{
            return <tr key={i}>
                  <td>{i+1}</td> 
                  <td>{e.name}</td>
                  <td>{e.std}</td>
                  <td>{e.section}</td>
                  <td>{e.email}</td>
                  <td>
                    <Link to={`/edit-student/${e.id}`}>
                      <div>
                        <button className="btn btn-primary btn-warning">Edit</button>
                      </div>
                    </Link>
                  </td>
                  <td>
                    <div>
                      <button className="btn btn-outline-danger" onClick={() => handleDelete(e.id)}>Delete</button>
                    </div>
                  </td>
                  </tr>
          })
        }
      </tbody>
    </table>
  </div>
}

export default AllStudents;