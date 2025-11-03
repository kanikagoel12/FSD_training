import React from "react";
import "./Student.css";

function Student({data}) {
    return (
        <>
        <div className="container">
            <h1>Student Info:</h1>
            <img src={data.pic} alt="pic" width="100px" height="100px"/>
            <h3>{data.name}</h3>
            <p>Age: {data.age}</p>
            <p>Roll: {data.roll}</p>
            <p>Branch: {data.branch}</p>
            <p>Section: {data.section}</p>
            <p>College: {data.college}</p>

        </div>
        </>
    );
}
export default Student;