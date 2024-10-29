import React from "react";
import { Client, Hotel } from "../../Types";

interface Props {
  name: string;
  value: string | number;
  options: Hotel[] | Client[];
  error?: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ name, value, options, error, handleChange }: Props) => (
  <div className="formField">
    <select
      name={name}
      value={value}
      onChange={handleChange}
      className={error && "error"}
      required
    >
      {options.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
    {error && <span className="errorText">{error}</span>}
  </div>
);

export default Select;
