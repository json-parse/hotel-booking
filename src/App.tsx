import React, { useState, useEffect } from "react";
import "./App.css";
import { Hotel, Client, NewBooking, EntityType } from "./Types";
import { mockHotels, mockClients } from "./mockData";
import Header from "./components/Header";
import List from "./components/List";
import Booking from "./components/Booking";
import firebaseApp from "./base";

function App() {
  const [data, setData] = useState({
    hotels: mockHotels,
    clients: mockClients,
    booking: [],
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

  useEffect(() => {
    firebaseApp.database().ref("data").update(data);
  }, [data]);

  const addToBooking = (item: Client | Hotel, type: EntityType) => {
    setNewBooking({ ...newBooking, [type]: item });
  };

  return (
    <>
      <Header />
      <div className="container">
        <List type="hotel" items={data.hotels} addToBooking={addToBooking} />
        <List type="client" items={data.clients} addToBooking={addToBooking} />
        <div>
          {newBooking && <Booking booking={newBooking} />}
          <List type="booking" items={[]} />
        </div>
      </div>
    </>
  );
}

export default App;
