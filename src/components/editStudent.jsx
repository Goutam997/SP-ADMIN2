import React,{useState,useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
const url = "https://61c41903f1af4a0017d992f0.mockapi.io/students";
function EditStudent(){

  // let student;
  // allData = props.data;

  let navigate = useNavigate();
  let params = useParams();
  let [name, setName] = useState("");
  let [std, setStd] = useState("");
  let [section, setSection] = useState("");
  let [email, setEmail] = useState("");

  // student = allData.students[params.i];
  // console.log(allData, student);

  useEffect(() => {
    getData();
  },[]);

  let getData = async() =>{
    try{
      let response = await axios.get(url+"/"+params.i)
      console.log(response);
      setName(response.data.name);
      setStd(response.data.std)
      setSection(response.data.section);
      setEmail(response.data.email);
    }
    catch(error){
      console.log("error",error);
    }
  }

  let handleSubmit = async()=> {
    
    try{
      let response = await axios.put(url+"/"+params.i,{
        "name": name,
        "std": std,
        "section":section,
        "email" : email
      });
      if(response.status === 200)
        navigate("/all-students")
    }
    catch(error){
      console.log("error", error)
    }
  }

  return <>
    <div className="jumbotron">
      <h3>Edit {name}'s profile</h3>
      <form>
        <div class="form-group">
          <input type="name" value={name} class="form-control" aria-describedby="FullName" placeholder="Fullname" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div class="form-group row">
          <div class="col">
            <input type="text" value={std} class="form-control" aria-describedby="Standard" placeholder="Std" onChange={(e)=>setStd(e.target.value)}/></div>
          <div class="col">
            <input type="text" value={section} class="form-control" aria-describedby="Section" placeholder="Section" onChange={(e)=>setSection(e.target.value)}/></div>  
        </div>

        <div class="form-group">
          <input type="email" value={email} class="form-control" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" class="btn btn-primary" onClick={() =>{handleSubmit()}}>Update</button>
      </form>
    </div>
  </>
}

export default EditStudent;