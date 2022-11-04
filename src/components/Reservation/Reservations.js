import React, { useEffect, useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchReservations,
  deleteReservation, setIdle,
} from '../../features/reservationsSlice';
import { AuthContext } from '../../context/AuthContext';
import './Reservation.css';
import { Button } from '@mui/material';

function Reservations() {
  const dispatch = useDispatch();
  const { user, setUser } = useContext(AuthContext);
  const reservation = useSelector((state) => state.reservations);
  const [allReservations, setAllReservations] = useState([]);
  const status = useSelector((state) => state.reservations.status);

  useEffect(() => {
    if (status === 'Unauthorized') {
      localStorage.clear();
      setUser(null);
      dispatch(setIdle());
    }
  }, [status]);

  useEffect(() => {
    dispatch(fetchReservations(user.authorization));
  }, [fetchReservations]);

  useEffect(() => {
    setAllReservations(reservation?.reservations);
  }, [reservation]);

  const handleDelete = (reservation) => {
    const token = user?.authorization;
    dispatch(deleteReservation({ token, reservationId: reservation.id }));
  };

  return (
    <div className="reservations">
      <div className="header-info">
        <h1 className="text-center header">Reservations</h1>
        <small className="text-center">Here are your list of reservations!</small>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Teacher's name</th>
            <th scope="col">When</th>
            <th scope="col">City</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allReservations.map((reservation) => (
            <tr key={reservation.id}>
              <th scope="row">{reservation.id}</th>
              <td>{reservation.teacher.name}</td>
              <td>{reservation.reservation_date}</td>
              <td>{reservation.city}</td>
              <td>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleDelete(reservation);
                  }}
                  style={{ backgroundColor: 'red' }}
                >
                  Cancel Reservation
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reservations;
