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