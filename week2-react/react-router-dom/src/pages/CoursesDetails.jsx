import React from "react";
import { useParams } from "react-router-dom";

const CoursesDetails = () => {
  const courseId = useParams();
  return (
    <div>
      <h1>{courseId.id.toUpperCase()} CoursesDetails</h1>
    </div>
  );
};

export default CoursesDetails;
