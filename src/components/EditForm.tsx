import React, { useEffect, useState } from "react";
import { Hotel, Client, HotelBooking } from "../Types";
import Input from "./form/Input";
import Select from "./form/Select";
import { isBooking, isClient } from "../helpers";

interface Props {
  details: Hotel | Client | HotelBooking;
  options?: { hotels: Hotel[]; clients: Client[] };
  setDetails: (details: Hotel | Client | HotelBooking) => void;
  setIsValidForm: (isValid: boolean) => void;
}

const EditForm = ({ details, options, setDetails, setIsValidForm }: Props) => {
  const [errors, setErrors] = useState<{ [key: string]: string } | undefined>(
    undefined
  );
  const { name, address, createdDate } = details;

  useEffect(() => {
    setIsValidForm(Boolean(!errors));
  }, [errors]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setDetails({ ...details, [name]: value });

    if (errors && errors[name]) {
      if (Object.keys(errors).length > 1) {
        const errorsClone = { ...errors };
        delete errorsClone[name];
        setErrors(errorsClone);
      } else {
        setErrors(undefined);
      }
    }
    // validate empty field
    if (!value.trim().length) {
      setErrors({ ...errors, [name]: "Required field" });
    }
  };

  return (
    <form>
      <Input
        name="name"
        value={name}
        error={errors?.name}
        handleChange={handleChange}
      />
      <Input
        name="address"
        value={address}
        error={errors?.address}
        handleChange={handleChange}
      />
      {isClient(details) && (
        <Input
          type="number"
          name="phone"
          value={details.phone}
          error={errors?.phone}
          handleChange={handleChange}
        />
      )}
      {/* todo: change to datepicker */}
      <Input
        name="createdDate"
        value={createdDate}
        error={errors?.createdDate}
        handleChange={handleChange}
      />
      {isBooking(details) && options && (
        <>
          <Select
            name="hotelId"
            value={details.hotelId}
            error={errors?.hotelId}
            options={options.hotels}
            handleChange={handleChange}
          />
          <Select
            name="clientId"
            value={details.clientId}
            error={errors?.clientId}
            options={options.clients}
            handleChange={handleChange}
          />
        </>
      )}
    </form>
  );
};

export default EditForm;
