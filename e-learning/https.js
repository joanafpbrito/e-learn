import { useState, useEffect } from "react";

export function getAvailableCourses(){
    const[availableCourses, setAvailableCourses] = useState([]);

    useEffect(() =>
        {
          fetch('http://localhost:3700/courses')
          .then((response) => { return response.json()})
          .then((responseData) => { setAvailableCourses(responseData.coursesData); });
        },
        []);
        return availableCourses;

}

export function getCourseDetails(id){
  const[courseDetails, setCourseDetails] = useState([]);

  useEffect(() =>
      {
        fetch('http://localhost:3700/coursesModules')
        .then((response) => { return response.json()})
        .then((responseData) => { 
          // const details = responseData.coursesModules.find((i) => i.id === id);
          setCourseDetails(responseData.coursesModules);
         });
      },
      []);
      return courseDetails;

}

