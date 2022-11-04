import React, { useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createReservation, setIdle } from '../../features/reservationsSlice';
import { AuthContext } from '../../context/AuthContext';
import './ReservationForm.css';
import {
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
  DialogTitle,
  Select,
  Paper,
  TextField,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import { useNavigate } from 'react-router-dom';

function ReservationForm() {
  const teachers = useSelector((state) => state.teacher.teachers);
  const dispatch = useDispatch();
  const createReservationStatus = useSelector(
    (state) => state.reservations.status,
  );
  const [reservation_date, setReservationDate] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [city, setCity] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (createReservationStatus === 'CreateReservationSuccess') {
      navigate('/reservations');
      dispatch(setIdle());
      setSnackOpen(true);
    }

    if (createReservationStatus === 'ReservationFailed') {
      setDialogOpen(true);
      dispatch(setIdle());
    }
  }, [createReservationStatus]);

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleSubmit = () => {
    const token = user?.authorization;

    const dateString = reservation_date;

    dispatch(
      createReservation({
        token,
        teacher: selectedTeacher || teachers[0],
        city,
        reservation_date: dateString,
      }),
    );
  };

  const handleTeacherSelect = (text) => {
    const teacherId = parseInt(text);
    const sel_teacher = teachers.find((teacher) => teacher.id === teacherId);

    setSelectedTeacher(sel_teacher);
  };

  const handleSnackClose = () => {
    navigate('/reservations');
    setSnackOpen(false);
  };

  return (

    <div className="App">
      <Paper
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          minWidth: 300,
          minHeight: 300,
          marginLeft: 3,
          marginRight: 3,
          marginTop: '20%',
          paddingTop: 5,
          paddingBottom: 5,
        }}
      >
        <h2>Add Reservation</h2>
        <form className="form">
          <FormControl fullWidth sx={{ marginTop: '17px' }}>
            <InputLabel id="demo-simple-select-label">Select Teacher</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedTeacher?.id || ''}
              label="Select Teeacher"
              onChange={(e) => handleTeacherSelect(e.target.value)}
            >
              {teachers
                && teachers.map((teacher) => (
                  <MenuItem key={teacher.id} value={teacher.id}>{teacher.name}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ marginTop: '17px' }}>
            <TextField
              id="city"
              label="City"
              variant="outlined"
              sx={{ marginBottom: 2 }}
              onChange={(e) => setCity(e.target.value)}
            />
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="Date mobile"
              inputFormat="YYYY-MM-DD"
              value={reservation_date}
              onChange={(val) => setReservationDate(val)}
              renderInput={(params) => <TextField {...params} />}
              fullWidth
            />
          </LocalizationProvider>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              backgroundColor: '#98BF10',
              marginTop: '10px',
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity="success"
          sx={{ width: '100%' }}
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
          Reservation Failed!
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
    </div>
  );
}

export default ReservationForm;
