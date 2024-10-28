import React from "react";
import { HotelBooking, NewBooking } from "../Types";
import Info from "./Info";

interface Props {
  booking: NewBooking;
  addBooking: (booking: HotelBooking) => void;
}

const Booking = ({ booking, addBooking }: Props) => {
  const formatAndSave = () => {
    if (booking.client && booking.hotel) {
      const { client, hotel } = booking;
      const formattedBooking = {
        id: Date.now(),
        hotelId: hotel.id,
        name: hotel.name,
        address: hotel.address,
        createdDate: new Date().toLocaleDateString(),
        clientId: client.id,
      };
      addBooking(formattedBooking);
    }
  };
  return (
    <div className="card">
      <h3>New booking</h3>
      <div className="twoColumn">
        {booking.hotel && <Info title="Hotel" info={booking.hotel} />}
        {booking.client && <Info title="Client" info={booking.client} />}
      </div>
      {booking.hotel && booking.client && (
        <button onClick={formatAndSave}>Book</button>
      )}
    </div>
  );
};

export default Booking;
