import React,{useState,useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
const url = "https://61c41903f1af4a0017d992f0.mockapi.io/students";
function EditStudent(props){

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

  async function getData(){
    // setName(student.name);
    // setStd(student.std);
    // setSection(student.section);
    // setEmail(student.email);
    await fetch(url+"/"+params.i)
    .then(response => response.json())
    .then(res => {
      console.log(res);
      setName(res.name);
      setStd(res.std)
      setSection(res.section);
      setEmail(res.email);
    })
    .catch(err =>{
      console.log("error", err)
    })
  }

  let handleSubmit = async()=> {
    // let update = {name,std,section,email};
    // let newArr = [...allData.students];
    // newArr.splice(params.i,1,update);
    // setStudents(newArr);
    await fetch(url+"/"+params.i,{
      method:"PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "std": std,
        "section":section,
        "email" : email
      })
    })
    .then(response => response.json())
    .then(res => {
      navigate("/all-students")
    })
    .catch(err =>{
      console.log("error", err)
    })
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
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Update</button>
      </form>
    </div>
  </>
}

export default EditStudent;