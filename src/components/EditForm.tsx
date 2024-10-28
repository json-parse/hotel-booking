import React, { useState } from "react";
import { Hotel, Client, HotelBooking } from "../Types";
import Input from "./form/Input";
import Select from "./form/Select";

interface Props {
  item: Hotel | Client | HotelBooking;
}

const EditForm = ({ item }: Props) => {
  const [details, setDetails] = useState(item);
  const { name, address, createdDate } = details;

  const isClient = (
    details: Hotel | Client | HotelBooking
  ): details is Client => (details as Client).phone !== undefined;

  const isExistingBooking = (
    details: Hotel | Client | HotelBooking
  ): details is HotelBooking =>
    Boolean(
      (details as HotelBooking).hotelId && (details as HotelBooking).hotelId
    );

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
      {isExistingBooking(details) && (
        <>
          <Select
            name="hotelId"
            value={details.hotelId}
            handleChange={handleChange}
          />
          <Select
            name="clientId"
            value={details.clientId}
            handleChange={handleChange}
          />
        </>
      )}
    </form>
  );
};

export default EditForm;
