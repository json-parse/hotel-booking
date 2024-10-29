import React, { useState } from "react";
import { Hotel, Client, HotelBooking, EntityType } from "../Types";
import EditForm from "./EditForm";
import Info from "./Info";

interface Props {
  type: EntityType;
  item: Hotel | Client | HotelBooking;
  options?: { hotels: Hotel[]; clients: Client[] };
  updateData: (changedItem: Client | Hotel, type: EntityType) => void;
  addToBooking?: (item: Client | Hotel, type: EntityType) => void;
}

const Details = ({ type, item, options, updateData, addToBooking }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [details, setDetails] = useState(item);

  const handleBtnClick = () => {
    if (isEdit) {
      //todo: update only if valid form
      updateData(details, type);
    }
    setIsEdit(!isEdit);
  };

  return (
    <li className="card">
      {isEdit ? (
        <EditForm details={details} setDetails={setDetails} options={options} />
      ) : (
        <Info info={item} options={options} />
      )}
      {addToBooking && (
        <button
          type="button"
          disabled={isEdit}
          onClick={() => addToBooking(item, type)}
        >
          Select
        </button>
      )}
      <button type="button" className="secondaryBtn" onClick={handleBtnClick}>
        {isEdit ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Details;
