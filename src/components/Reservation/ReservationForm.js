import React, {useContext, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { createReservation } from "../../features/reservationsSlice";
import { AuthContext } from "../../context/AuthContext";
import "./ReservationForm.css";
import { Snackbar, Alert } from "@mui/material";


const ReservationForm = () => {
  const teachers = useSelector((state) => state.teacher.teachers);
  const dispatch = useDispatch();
  const [reservation_date, setReservationDate] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [city, setCity] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const handleSubmit = () => {
    let token = user.authorization;
    let dateString = reservation_date.year()+"-"+reservation_date.month()+"-"+reservation_date.day();
    
    dispatch(createReservation({token, selectedTeacher, city, reservation_date: dateString}));
  }

  const handleTeacherSelect = (e) => {
    let teacherId = parseInt(e.target.value);
    setSelectedTeacher(teachers.find((teacher) => teacher.id === teacherId));
  }


  const handleSnackClose = () => {
    setSnackOpen(false);
  }

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card px-1 py-4 w-50">
          <div className="card-body">
            <h6 className="information mt-4">Reservation Form</h6>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label >Select Teacher</label><br />
                  <select onChange={(e) => handleTeacherSelect(e.target.value)}>
                    {
                      teachers && teachers.map((teacher) => (
                        <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
                      ))
                    }
                  </select>
                  <br />
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="Enter City"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label for="date">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    placeholder="Enter date"
                    onChange={(e) => setReservationDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className=" d-flex justify-content-center">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackClose}
       >
        <Alert onClose={handleSnackClose} severity="success" sx={{ width: '100%' }}>
            Reservation has been created Successfully
        </Alert>
       </Snackbar>
    </>
  );
};

export default ReservationForm;
