import React from "react";
import { NewBooking } from "../Types";
import Info from "./Info";

interface Props {
  booking: NewBooking;
}

const Booking = ({ booking }: Props) => (
  <div className="card">
    <h3>New booking</h3>
    <div className="twoColumn">
      {booking.hotel && <Info title="Hotel" info={booking.hotel} />}
      {booking.client && <Info title="Client" info={booking.client} />}
    </div>
  </div>
);

export default Booking;
