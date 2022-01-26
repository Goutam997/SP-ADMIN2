import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
const url = "https://61c41903f1af4a0017d992f0.mockapi.io/students";
function AddStudent(){

  // let allData = props.data;
  // let navigate = useNavigate();
  // console.log(allData.students);
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [std, setStd] = useState("");
  let [section, setSection] = useState("");
  let [email, setEmail] = useState("");

  let handleSubmit = async() => {
    // let newArr = [...allData.students];
    // let update = {"name":name, "std":std, "section":section, "email":email};
    // newArr.push(update);
    // allData.setStudents(newArr);
    // console.log(allData);
    // navigate("/all-students");
    await fetch(url,{
      method:"POST",
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
      console.log(res);
      navigate("/all-students");
    })
    .catch(err =>{
      console.log("error", err)
    })

  }

  return <div className="container">
    <div className="jumbotron">
      <h3>Add Students</h3>
      <form>
        <div class="form-group">
          <input type="name" class="form-control" aria-describedby="FullName" placeholder="Fullname" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div class="form-group row">
          <div class="col">
            <input type="text" class="form-control" aria-describedby="Standard" placeholder="Std" onChange={(e)=>setStd(e.target.value)}/></div>
          <div class="col">
            <input type="text" class="form-control" aria-describedby="Section" placeholder="Section" onChange={(e)=>setSection(e.target.value)}/></div>  
        </div>

        <div class="form-group">
          <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  </div>

}

export default AddStudent;