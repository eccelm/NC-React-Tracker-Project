import axios from "axios";

export async function fetchStudents(){
   const students = await axios
   .get("https://nc-student-tracker.herokuapp.com/api/students")
   console.log(students)
   return students;
}

export async function fetchBlocks(){
  const blocks = await axios
  .get("https://nc-student-tracker.herokuapp.com/api/blocks")
  console.log(blocks)
  return blocks;
}

// fetchStudentsList = () => {
//    return axios
//      .get("https://nc-student-tracker.herokuapp.com/api/students")
//      .then((response) => {
//        console.log(response);
//        return response.data.students;
//      });
//  };


//  fetchBlocks = () => {
//    return axios
//      .get("https://nc-student-tracker.herokuapp.com/api/blocks")
//      .then((response) => {
//        console.log(response);
//        return response.data.blocks;
//      });
//  };

