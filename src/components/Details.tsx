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
  const [details, setDetails] = useState(item);
  const [isEdit, setIsEdit] = useState(false);
  const [isValidForm, setIsValidForm] = useState(true);

  const handleBtnClick = () => {
    if (isEdit) {
      updateData(details, type);
    }
    setIsEdit(!isEdit);
  };

  return (
    <li className="card">
      {isEdit ? (
        <EditForm
          details={details}
          options={options}
          setDetails={setDetails}
          setIsValidForm={setIsValidForm}
        />
      ) : (
        <Info info={item} options={options} />
      )}
      {addToBooking && (
        <button
          type="button"
          className={isEdit ? "disabledBtn" : ""}
          disabled={isEdit}
          onClick={() => addToBooking(item, type)}
        >
          Select
        </button>
      )}
      <button
        type="button"
        className={`secondaryBtn ${!isValidForm && "disabledBtn"}`}
        disabled={!isValidForm}
        onClick={handleBtnClick}
      >
        {isEdit ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Details;
