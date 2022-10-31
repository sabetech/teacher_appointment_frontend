import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import { getBooking } from "../features/reservationsSlice";

const Reservations = () => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooking(user.authorization));
  }, []);

  const reservation = useSelector((state) => state.reservations);
  const allReservations = reservation.reservations;
  return (
    <div>
      <h1>Reservations</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Teacher's name</th>
            <th scope="col">When</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allReservations.map((reservation) => (
            <tr>
              <th scope="row">{reservation.id}</th>
              <td>{reservation.teacher_id}</td>
              <td>{reservation.reservation_date}</td>
              <td>
                <button className="btn">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservations;
