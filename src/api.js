import axios from "axios";

const trackerApi = axios.create({
  baseURL: "https://nc-student-tracker.herokuapp.com/api",
});


export async function fetchStudents(){
   const response = await trackerApi
   .get("/students")
   //console.log(students, Object.keys(students))
   const {students} = response.data;
   console.log(students)
   console.log("I'm second")
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

