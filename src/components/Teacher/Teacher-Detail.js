import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {fetchteachers ,getTeacherList} from "../../features/teachersSlice";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "@mui/material";

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
        
    },[dispatch]);

    useEffect(() => {
        if (teachers.length > 0) {
            setTeacher(() => teachers.find(teacher => teacher.id === teacherId));
            console.log("TEACHERS:::",teachers)
            console.log("SINGLE TEACHER:::",teacher)
        }
    },[teachers]);

    return (
        <div style={{ display: "flex" }}>
            {teacher && (<>
                    <div style={{ width: "70%" }}>
                        <img src={teacher?.photo} alt="profile photo" />
                    </div>
                    <div style={{ width: "20%" }}>
                        <h3>{teacher?.name}</h3>
                        <h4>{teacher?.title}</h4>
                        <div>
                            <Button variant="contained">Reserve</Button>
                        </div>
                    </div>
                    
                </>
            ) || <h3>Teacher not found</h3>
            }
        </div>
    );
}

export default TeacherDetail;