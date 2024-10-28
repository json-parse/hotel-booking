import React from "react";
import { Client, Hotel } from "../Types";

interface Props {
  title: string;
  info: Hotel | Client;
}

const Info = ({ title, info }: Props) => (
  <div>
    <h6>{title}</h6>
    <p>Name: {info.name}</p>
    <p>Address: {info.address}</p>
  </div>
);

export default Info;
