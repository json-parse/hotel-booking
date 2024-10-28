import React from "react";
import { Hotel, Client, HotelBooking, EntityType } from "../Types";
import EditForm from "./EditForm";

interface Props {
  type: EntityType;
  item: Hotel | Client | HotelBooking;
  addToBooking?: (item: Client | Hotel, type: EntityType) => void;
}

const Details = ({ type, item, addToBooking }: Props) => {
  return (
    <li className="card">
      <EditForm item={item} />
      {addToBooking && (
        <button disabled={false} onClick={() => addToBooking(item, type)}>
          Select
        </button>
      )}
    </li>
  );
};

export default Details;
