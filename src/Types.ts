export interface HotelBooking {
  id: number;
  hotelId: number;
  name: string;
  address: string;
  createdDate: string;
  clientId: number;
}

export interface Client {
  id: number;
  name: string;
  address: string;
  phone: number;
  createdDate: string;
}

export interface Hotel {
  id: number;
  name: string;
  address: string;
  createdDate: string;
}

export interface NewBooking {
  hotel?: Hotel;
  client?: Client;
}

export type EntityType = "hotel" | "client" | "booking";
