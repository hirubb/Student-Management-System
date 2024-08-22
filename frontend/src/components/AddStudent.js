import React,{useState} from "react";
import axios from "axios";





export default function AddStudent(){

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [nic,setNIC] = useState("");

    function sendData(e){  //executes when  form submit button is clicked
        e.preventDefault();
        const newStudent = {  //new student  object
            name,
            age,
            nic
        }
        console.log(newStudent);

        axios.post("http://localhost:8070/student/add",newStudent) //sending  data to server
        .then((res)=>{
            alert("Student Added Successfully");
            setName("");
            setAge("");
            setNIC("");

        })
        .catch((err)=>{
            console.error(err);
            alert(err.message);
        }
        )


    }



    return (
        <div className="container">
      <form onSubmit={sendData}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            name : 
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>{
                setName(e.target.value);
            }}
          />
          
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            age
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>{
                setAge(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            NIC : 
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e)=>{
                setNIC(e.target.value);
            }}
          />
          
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    );

   
}

