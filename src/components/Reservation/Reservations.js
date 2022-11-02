import React, { useEffect, useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchReservations } from "../../features/reservationsSlice";
import { AuthContext } from "../../context/AuthContext";

const Reservations = () => {
  const dispatch = useDispatch();
  const {user} = useContext(AuthContext);
  const reservation = useSelector((state) => state.reservations);
  const [allReservations, setAllReservations] = useState([]);
  
  // console.log(allReservations);

  useEffect(() => {
    setAllReservations(reservation.reservations);

    console.log(allReservations);
  }, [reservation]);

  useEffect(() => {
    dispatch(fetchReservations(user.authorization));
  }, [fetchReservations]);
  return (
    <div>
      <h1>Reservations</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Teacher's name</th>
            <th scope="col">When</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {allReservations.map((reservation) => (
            <tr>
              <th scope="row">{reservation.id}</th>
              <td>{reservation.teacher.name}</td>
              <td>{reservation.reservation_date}</td>
              <td>
                {reservation.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservations;
