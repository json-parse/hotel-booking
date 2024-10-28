import React, { useState, useEffect } from "react";
import "./App.css";
import { Hotel, Client, HotelBooking, NewBooking, EntityType } from "./Types";
import Header from "./components/Header";
import List from "./components/List";
import Booking from "./components/Booking";
import firebaseApp from "./base";

function App() {
  const [data, setData] = useState({
    hotels: [],
    clients: [],
    bookings: [],
  });
  const [newBooking, setNewBooking] = useState<NewBooking | undefined>(
    undefined
  );

  useEffect(() => {
    firebaseApp
      .database()
      .ref("data")
      .on("value", (snapshot) => {
        if (snapshot.val()) setData(snapshot.val());
      });
  }, []);

  const addToBooking = (item: Client | Hotel, type: EntityType) => {
    setNewBooking({ ...newBooking, [type]: item });
  };

  const updateData = (changedItem: Client | Hotel, type: EntityType) => {
    const key =
      type === "hotel" ? "hotels" : type === "client" ? "clients" : "bookings";
    const updatedArray = data[key].map((item: any) => {
      if (item.id === changedItem.id) {
        return changedItem;
      } else {
        return item;
      }
    });
    firebaseApp
      .database()
      .ref("data")
      .update({ ...data, [key]: updatedArray });
  };

  const addBooking = (booking: HotelBooking) => {
    const bookingsClone: HotelBooking[] = [...data.bookings];
    bookingsClone.push(booking);
    firebaseApp
      .database()
      .ref("data")
      .update({ ...data, bookings: bookingsClone });
  };

  return (
    <>
      <Header />
      <div className="container">
        <List
          type="hotel"
          items={data.hotels}
          addToBooking={addToBooking}
          updateData={updateData}
        />
        <List
          type="client"
          items={data.clients}
          addToBooking={addToBooking}
          updateData={updateData}
        />
        <div>
          {newBooking && (
            <Booking booking={newBooking} addBooking={addBooking} />
          )}
          <List type="booking" items={data.bookings} updateData={updateData} />
        </div>
      </div>
    </>
  );
}

export default App;
