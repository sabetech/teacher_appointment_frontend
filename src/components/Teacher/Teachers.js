import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeacherList, fetchteachers } from '../../features/teachersSlice';
import { AuthContext } from '../../context/AuthContext';
import Teacher from './Teacher';
import './Teachers.css';

function Teachers() {
  const dispatch = useDispatch();
  const teachers = useSelector(getTeacherList);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    dispatch(fetchteachers(user?.authorization));
  }, [fetchteachers]);

  return (
    <div className="content">
      <div className="header-info">
        <h1 className="text-center header">Teachers</h1>
        <small className="text-center">Click to Select your teacher!</small>
      </div>
      <div className="teachers">
        <div className="teacher-list">
          {
          (teachers
            ? teachers.map((teacher) => (
              <div className="teacher-single" key={teacher.id}>
                <Teacher
                  id={teacher.id}
                  name={teacher.name}
                  title={teacher.title}
                  photo={teacher.photo}
                />
              </div>
            )) : <div className="text-center">No Teachers Exists</div>)
            }
        </div>
      </div>
    </div>
  );
}

export default Teachers;
