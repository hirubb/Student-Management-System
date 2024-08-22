import React,{useEffect,useState} from 'react';
import axios from 'axios';

export default function AllStudents(){
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        function getStudents(){
            axios.get('http://localhost:8070/student/').then((res)=>{

                setStudents(res.data);
            }).catch((err)=>{
                console.log(err);
            })
            
        }
        getStudents();

    })
    
    return(
        <div className="container mt-5">
      <h1 className="text-center mb-4">All Students</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">NIC</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.nic}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )

}