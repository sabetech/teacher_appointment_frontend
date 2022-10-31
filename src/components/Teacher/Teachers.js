import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeacherList, fetchteachers } from "../../features/teachersSlice";
import { AuthContext } from "../../context/AuthContext";
import Teacher from "./Teacher";
import "./Teachers.css";


const Teachers = () => {
    const dispatch = useDispatch();
    const teachers = useSelector(getTeacherList);
    const {user} = useContext(AuthContext)

    useEffect(() => {
        dispatch(fetchteachers(user.authorization));
    },[fetchteachers]);

    return (
        <div className="teachers">
            <h2>Teachers</h2>
            <ul className="teacher-list">
                {
                    teachers && teachers.map(teacher => 
                                            <li className="teacher-single" key={teacher.id}>
                                                <Teacher 
                                                    name={teacher.name} 
                                                    title={teacher.title}
                                                    photo={teacher.photo} 
                                                />
                                            </li>
                                )
                }
            </ul>
        </div>
    )
}

export default Teachers;