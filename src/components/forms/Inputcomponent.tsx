import React, { ChangeEventHandler } from "react";
import "./style.css";

//TODO: hacer obligatorio el value y el onChange
interface props {
  type?: "text" | "range" | "select";
  range?: {
    min: number;
    max: number;
    step?: number;
  };
  options?: string[];
  placeholder: string;
  value?: string | number;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  children?: any;
  name?: string;
}

export const Inputcomponent = ({
  name,
  type = "text",
  placeholder,
  range,
  value,
  onChange,
  options,
}: props) => {
  const { min, max, step } = range || { min: 0, max: 100, step: 1 };
  switch (type) {
    case "text":
      return (
        <div className="input-group mb-3">
          <div className="title">
            <label htmlFor={name}>{placeholder}</label>
          </div>
          <input
            placeholder={placeholder}
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="form-control"
          />
        </div>
      );
    case "range":
      return (
        <div className="range-form">
          <div className="title">
            <label className="form-label">{placeholder}</label>
            <span>{value}</span>
          </div>
          <input
            type="range"
            className="form-range "
            min={min}
            onChange={onChange}
            name={name}
            step={step}
            value={value}
            max={max}
          ></input>
        </div>
      );
    case "select":
      return (
        <div className="input-group mb-3 ">
          <div className="title">
            <label htmlFor={name}>{placeholder}</label>
          </div>
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="form-control"
          >
            {options?.map((option: string) => (
              <option key={option} value={option}>
                {" "}
                {option}{" "}
              </option>
            ))}
          </select>
        </div>
      );
  }
};
