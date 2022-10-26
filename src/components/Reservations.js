import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReservation } from "../features/reservationsSlice";

const Reservations = () => {
  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.reservations);
  const allReservations = reservation.reservations;
  console.log(allReservations);

  useEffect(() => {
    dispatch(getReservation());
  }, []);
  return (
    <div>
      <h1>Reservations</h1>
      <table class="table">
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
              <td>{reservation.teacher_name}</td>
              <td>{reservation.reservation_date}</td>
              <td>
                <button className="btn ">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservations;
