import React, { useState, useEffect } from 'react'
import Course from './Course';

const AllCourse=()=>
{
    useEffect(()=>{
        document.title="All Courses ";
    },[])
    const [courses,setCourses]=useState([
      {title:"JAVA course",description:"this is demo course"},
      {title:"PYTHON course",description:"this is demo course"},
      {title:"REACT course",description:"this is demo course"}

    ])
    return(
        <div className="text-center">
            <h1>All Courses</h1>
            <p>List of courses are as follows :</p>
            {
             courses.length>0 
             ? courses.map((item)=> <Course course={item} /> ) :"No Courses"
            }
        </div>


    );
}
export default AllCourse;