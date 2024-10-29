import React from "react";
import { Hotel, Client, HotelBooking } from "../Types";
import Input from "./form/Input";
import Select from "./form/Select";
import { isBooking, isClient } from "../helpers";

interface Props {
  details: Hotel | Client | HotelBooking;
  options?: { hotels: Hotel[]; clients: Client[] };
  setDetails: (details: Hotel | Client | HotelBooking) => void;
}

const EditForm = ({ details, options, setDetails }: Props) => {
  const { name, address, createdDate } = details;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  return (
    <form>
      <Input name="name" value={name} handleChange={handleChange} />
      <Input name="address" value={address} handleChange={handleChange} />
      {isClient(details) && (
        <Input
          type="number"
          name="phone"
          value={details.phone}
          handleChange={handleChange}
        />
      )}
      {/* todo: change to datepicker */}
      <Input
        name="createdDate"
        value={createdDate}
        handleChange={handleChange}
      />
      {isBooking(details) && options && (
        <>
          <Select
            name="hotelId"
            value={details.hotelId}
            options={options.hotels}
            handleChange={handleChange}
          />
          <Select
            name="clientId"
            value={details.clientId}
            options={options.clients}
            handleChange={handleChange}
          />
        </>
      )}
    </form>
  );
};

export default EditForm;
