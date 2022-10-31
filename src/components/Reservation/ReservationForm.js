import React from "react";
import "./ReservationForm.css";

const ReservationForm = () => {
  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card px-1 py-4 w-50">
          <div className="card-body">
            <h6 className="information mt-4">Enter details to add a bus</h6>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label for="phone">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter phone"
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
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label for="time">Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="time"
                    placeholder="Enter time"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className=" d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationForm;
