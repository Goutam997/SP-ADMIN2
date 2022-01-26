import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
const url = "https://61c41903f1af4a0017d992f0.mockapi.io/students";
function AllStudents(){

  // let allData = props.data;
  let [students,setStudents] = useState([]);
  useEffect(()=>{
    getData();
  },[]);

  let getData = async() =>{
    await fetch(url)
    .then(response => response.json())
    .then(res => {
      console.log(res);
      setStudents(res);
    })
    .catch(err =>{
      console.log("error", err)
    })
  }

  async function handleDelete(element){
    await fetch(url+"/"+element,{
      method:"DELETE"
    })
    .then(response =>response.json())
    .then(res =>{
      getData();
    })
    .catch(err =>console.log("error",err))
    // let newArr = [...allData.students];

    // newArr.splice(element,1);
    // allData.setStudents(newArr);
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
                      <button className="btn btn-outline-danger" onClick={() => handleDelete(i)}>Delete</button>
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