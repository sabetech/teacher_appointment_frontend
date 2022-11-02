import { redirect, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchteachers, getTeacherList } from "../../features/teachersSlice";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  Button,
  Dialog,
  DialogContentText,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { createReservation } from "../../features/reservationsSlice";
import { Snackbar, Alert } from "@mui/material";

import "./Teacher-detail.css";

const TeacherDetail = () => {
  const params = useParams();
  const teachers = useSelector(getTeacherList);
  const createReservationStatus = useSelector(
    (state) => state.reservations.status
  );
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const teacherId = parseInt(params.id);
  const [teacher, setTeacher] = useState(null);
  const [city, setCity] = useState("");
  const [reservation_date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  useEffect(() => {
    if (teachers.length == 0) {
      dispatch(fetchteachers(user.authorization));
      return;
    }
  }, [dispatch]);

  useEffect(() => {
    if (createReservationStatus === "Success") {
      setSnackOpen(true);
      redirect("/reservations");
    }
  }, [createReservationStatus]);

  useEffect(() => {
    if (teachers.length > 0) {
      setTeacher(() => teachers.find((teacher) => teacher.id === teacherId));
    }
  }, [teachers]);

  const handleReserve = () => {
    setOpen(true);
  };

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };

  const handleSaveReservation = () => {
    setOpen(false);

    let token = user.authorization;
    let dateString =
      reservation_date.year() +
      "-" +
      reservation_date.month() +
      "-" +
      reservation_date.day();

    dispatch(
      createReservation({ token, teacher, city, reservation_date: dateString })
    );
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSnackClose = () => {
    setSnackOpen(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reserve</DialogTitle>
        <DialogContent>
          <div className="text-center">
            <img
              src={teacher?.photo}
              width="100"
              className="rounded-circle"
              alt={teacher?.name}
            />
          </div>
          <DialogContentText sx={{ marginBottom: 5 }}>
            To Reserve a Teacher <strong>[{teacher?.name}]</strong>, <br />
            Type in a City and Select a date
          </DialogContentText>

          <TextField
            sx={{ marginBottom: 2 }}
            autoFocus
            margin="dense"
            id="name"
            label="City"
            type="text"
            variant="outlined"
            fullWidth
            onChange={(e) => setCity(e.target.value)}
          />
          <br />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="Date mobile"
              inputFormat="YYYY-MM-DD"
              value={reservation_date}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
              fullWidth
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveReservation}>Reserve</Button>
        </DialogActions>
      </Dialog>

      <div className="container d-flex justify-content-between">
        {(teacher && (
          <>
            <div class="d-flex flex-column">
              <img
                src={teacher?.photo}
                width="100"
                class="rounded-circle"
                alt={teacher.name}
                style={{ height: "400px", width: "400px", objectFit: "cover" }}
              />
              <button
                className="bg-secondary p-1 px-4 rounded text-white my-3"
                onClick={() => handleReserve()}
              >
                book appointment
              </button>
            </div>

            <div class="text-center mt-3">
              <h3>Profile</h3>
              <ul class="list-group">
                <li class="list-group-item list-group-item-dark">
                  Name: {teacher.name}
                </li>
                <li class="list-group-item list-group-item-light">
                  Title: {teacher.title}
                </li>
                <li class="list-group-item list-group-item-dark">
                  Work experience: {teacher.work_experience}
                </li>
                <li class="list-group-item list-group-item-light">
                  Bio {teacher.bio}
                </li>
              </ul>
            </div>
          </>
        )) || <h3>Teacher not found</h3>}
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
          Teacher has been reserved Successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default TeacherDetail;
