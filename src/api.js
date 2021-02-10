import axios from "axios";

const trackerApi = axios.create({
  baseURL: "https://nc-student-tracker.herokuapp.com/api",
});

export async function fetchStudents(){
   const response = await trackerApi
   .get("/students")
   const {students} = response.data;
   return students;
}

export async function fetchBlocks(){
  const blocks = await axios
  .get("https://nc-student-tracker.herokuapp.com/api/blocks")
  console.log(blocks)
  return blocks;
}

export const getStudentById = async (id) => {
  const response = await trackerApi.get(`/${id}`)
  const {student} = response.data;
  return student;
};
