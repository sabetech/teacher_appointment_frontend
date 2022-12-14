import { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { getTeacherList, deleteTeacher } from '../../features/teachersSlice';
import { AuthContext } from '../../context/AuthContext';
import Teacher from './Teacher';
import './Teachers.css';

function RemoveTeacher() {
  const { user } = useContext(AuthContext);
  const teachers = useSelector(getTeacherList);
  const dispatch = useDispatch();
  // list teachers with a delete button

  const handleDelete = (teacher) => {
    const token = user?.authorization;
    dispatch(deleteTeacher({ token, teacherId: teacher.id }));
  };

  useEffect(() => {}, [dispatch]);

  return (
    <>
      <h1 className="text-center">Remove Teachers</h1>
      <div className="teachers" style={{ marginTop: '30px' }}>
        <div className="teacher-list">
          {(teachers
            && teachers.map((teacher) => (
              <div
                className="teacher-single"
                key={teacher.id}
                style={{ width: 400, height: 400 }}
              >
                <Teacher
                  id={teacher.id}
                  name={teacher.name}
                  title={teacher.title}
                  photo={teacher.photo}
                />
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => handleDelete(teacher)}
                  style={{ marginTop: '10px', padding: '10px', fontSize: '1.2rem' }}
                  fullWidth
                >
                  Delete
                </Button>
              </div>
            ))) || <div className="text-center">No Teachers Exists</div>}
        </div>
      </div>
    </>
  );
}

export default RemoveTeacher;
