import React, { useEffect } from "react";
import { Hotel, Client, HotelBooking, EntityType } from "../Types";
import Details from "./Details";

interface Props {
  type: EntityType;
  items?: Hotel[] | Client[] | HotelBooking[];
  options?: { hotels: Hotel[]; clients: Client[] };
  updateData: (changedItem: Client | Hotel, type: EntityType) => void;
  addToBooking?: (item: Client | Hotel, type: EntityType) => void;
}

const List = ({ type, items, options, updateData, addToBooking }: Props) => {
  const title =
    type === "hotel" ? "Hotels" : type === "client" ? "Clients" : "Bookings";

  return (
    <div>
      <h2>{title}</h2>
      {items && items.length ? (
        <ul>
          {items.map((item) => (
            <Details
              key={item.id}
              item={item}
              type={type}
              options={options}
              addToBooking={addToBooking}
              updateData={updateData}
            />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default List;
