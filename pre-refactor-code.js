
/*
STUDENTS - OLD COMPONENT DID MOUNT
*/
class Students extends Component {
 componentDidMount() {
    this.fetchStudentsList().then((students) => {
      this.setState({ students, isLoading: false });
    });
  }

  fetchStudentsList = () => {
    return axios
      .get("https://nc-student-tracker.herokuapp.com/api/students")
      .then((response) => {
        console.log(response);
        return response.data.students;
      });
  };
};