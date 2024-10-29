import React, { useEffect, useState } from "react";
import { Client, Hotel, HotelBooking } from "../Types";
import { getOrderedKeys, isBooking } from "../helpers";

type Details =
  | Hotel
  | Client
  | {
      id: number;
      hotelId: string;
      name: string;
      address: string;
      createdDate: string;
      clientId: string;
    };

interface Props {
  info: Hotel | Client | HotelBooking;
  options?: { hotels: Hotel[]; clients: Client[] };
}

const Info = ({ info, options }: Props) => {
  const [details, setDetails] = useState<Details>(info);

  useEffect(() => {
    if (options && isBooking(info)) {
      const client = options.clients.find((item) => info.clientId == item.id);
      const hotel = options.hotels.find((item) => info.hotelId == item.id);
      if (client && hotel)
        setDetails({ ...info, clientId: client.name, hotelId: hotel.name });
    } else {
      setDetails(info);
    }
  }, [info, options]);

  return (
    <div>
      {getOrderedKeys(info).map((key, i) => (
        <p key={i}>{details[key as keyof typeof info]}</p>
      ))}
    </div>
  );
};

export default Info;
