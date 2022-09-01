import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import StudentClassContent from "../components/StudentClassContent";

function StudentClass() {
  const [visibility, setVisibility] = React.useState({
    videos: true,
    assignments: true,
    students: true,
    quizzes: true,
    notes: true,
  });

  function toggler(text) {
    setVisibility((prevVisility) => {
      const data = {};
      for (let key in visibility) {
        data[key] = false;
      }
      console.log(text.toLowerCase());
      data[text.toLowerCase()] = true;
      return data;
    });
  }
  return (
    <>
      <NavBar />
      <Sidebar
        toggler={toggler}
        component={<StudentClassContent visibility={visibility} />}
      />
    </>
  );
}

export default StudentClass;
