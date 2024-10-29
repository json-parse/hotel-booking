import { Client, Hotel, HotelBooking } from "./Types";

export const isClient = (
  details: Hotel | Client | HotelBooking
): details is Client => (details as Client).phone !== undefined;

export const isBooking = (
  details: Hotel | Client | HotelBooking
): details is HotelBooking =>
  Boolean(
    (details as HotelBooking).hotelId && (details as HotelBooking).clientId
  );

export const getOrderedKeys = (info: Hotel | Client | HotelBooking) => {
  if ("phone" in info) return ["name", "address", "phone", "createdDate"];
  if ("clientId" in info)
    return ["name", "address", "createdDate", "hotelId", "clientId"];
  return ["name", "address", "createdDate"];
};
