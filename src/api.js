import axios from "axios";

const trackerApi = axios.create({
  baseURL: "https://nc-student-tracker.herokuapp.com/api",
});

export async function getStudents(graduated, block, cohort, sort_by, order){
   const response = await trackerApi
   .get(`/students`, {params: {graduated: graduated, block: block, cohort: cohort, sort_by: sort_by, order: order}})
   const {students} = response.data;
   return students;
}

export async function fetchBlocks(){
  const blocks = await axios
  .get("https://nc-student-tracker.herokuapp.com/api/blocks")
  return blocks;
}

export const getStudentById = async (id) => {
  const response = await trackerApi.get(`/${id}`)
  const {student} = response.data;
  return student;
};

// post new student
export const postNewStudent = async (newStudent) => {
  const response = await trackerApi
  .post(`/students`, newStudent)
  //console.log(response.data, "this is response data")
  const {student} = response.data;
  return student;
};
// patch graduate a student
// needs id and progress = true or false

// delete a student
// needs id
export const deleteStudent = async (studentId) => {
  const response = await trackerApi
  .delete(`/students/${studentId}`)
  console.log(response, response.data, response.status, response.statusText)
}

export const patchStudentsProgress = async (studentId, progress) => {
  const response = await trackerApi
  .patch(`/students/${studentId}?progress=${progress}`)
  console.log(response, response.data, response.status, response.statusText)
  return response.data.student
}