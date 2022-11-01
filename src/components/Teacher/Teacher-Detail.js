import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchteachers, getTeacherList } from "../../features/teachersSlice";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "@mui/material";

import "./Teacher-detail.css";

const TeacherDetail = () => {
  const params = useParams();
  const teachers = useSelector(getTeacherList);
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const teacherId = parseInt(params.id);
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    if (teachers.length == 0) {
      dispatch(fetchteachers(user.authorization));
      return;
    }
  }, [dispatch]);

  useEffect(() => {
    if (teachers.length > 0) {
      setTeacher(() => teachers.find((teacher) => teacher.id === teacherId));
      console.log("TEACHERS:::", teachers);
      console.log("SINGLE TEACHER:::", teacher);
    }
  }, [teachers]);

  return (
    <div style={{ display: "flex" }}>
      {(teacher && (
        <>
          <div class="container mt-5">
            <div class="row d-flex justify-content-center">
              <div class="col-md-7">
                <div class="card p-3 py-4">
                  <div class="text-center">
                    <img
                      src={teacher?.photo}
                      width="100"
                      class="rounded-circle"
                      alt={teacher.name}
                    />
                  </div>

                  <div class="text-center mt-3">
                    <span class="bg-secondary p-1 px-4 rounded text-white">
                      reserve
                    </span>
                    <h5 class="mt-2 mb-0">{teacher.name}</h5>
                    <span>{teacher.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )) || <h3>Teacher not found</h3>}
    </div>
  );
};

export default TeacherDetail;
