import React, { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createReservation, setIdle } from "../../features/reservationsSlice";
import { AuthContext } from "../../context/AuthContext";
import "./ReservationForm.css";
import { Snackbar, Alert, Dialog, DialogContent, DialogActions, Button, DialogContentText, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ReservationForm = () => {
  const teachers = useSelector((state) => state.teacher.teachers);
  const dispatch = useDispatch();
  const createReservationStatus = useSelector(
    (state) => state.reservations.status
  );
  const [reservation_date, setReservationDate] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [city, setCity] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {

    if (createReservationStatus === "CreateReservationSuccess") {
      navigate("/reservations");
      dispatch(setIdle());
      setSnackOpen(true);
    }

    if (createReservationStatus === "ReservationFailed") {
      setDialogOpen(true);
      dispatch(setIdle());
    }

  }, [createReservationStatus]);

  const handleClose = () => {
    setDialogOpen(false);
  }

  const handleSubmit = () => {
    let token = user.authorization;

    let dateString = reservation_date;

    dispatch(
      createReservation({
        token,
        teacher: selectedTeacher || teachers[0],
        city,
        reservation_date: dateString,
      })
    );
  };

  const handleTeacherSelect = (text) => {
    let teacherId = parseInt(text);
    const sel_teacher = teachers.find((teacher) => teacher.id === teacherId);

    setSelectedTeacher(sel_teacher);
  };

  const handleSnackClose = () => {
    navigate("/reservations");
    setSnackOpen(false);
  };

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card px-1 py-4 w-50">
          <div className="card-body">
            <h6 className="information mt-4">Reservation Form</h6>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label>Select Teacher</label>
                  <br />
                  <select onChange={(e) => handleTeacherSelect(e.target.value)}>
                    {teachers &&
                      teachers.map((teacher) => (
                        <option key={teacher.id} value={teacher.id}>
                          {teacher.name}
                        </option>
                      ))}
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
                  <label>Date</label>
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
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
                style={{ backgroundColor: "blue" }}
              >
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
        <Alert
          onClose={handleSnackClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Reservation has been created Successfully
        </Alert>
      </Snackbar>

      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Reservation Failed!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Reservation for this Teacher already exists. Use another teacher!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ReservationForm;
