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
        {booking.hotel && (
          <div>
            <h6>Hotel</h6>
            <Info info={booking.hotel} />
          </div>
        )}
        {booking.client && (
          <div>
            <h6>Client</h6>
            <Info info={booking.client} />
          </div>
        )}
      </div>
      {booking.hotel && booking.client && (
        <button type="button" onClick={formatAndSave}>
          Book
        </button>
      )}
    </div>
  );
};

export default Booking;
