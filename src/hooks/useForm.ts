import { useState } from "react";
import { Params } from "../interfaces/params";

export const useForm = (value: Params) => {
  const [values, setValues] = useState<Params>(value);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    
    if (
      (name === "minMembers" &&
        values.maxMembers &&
        parseInt(value) > values?.maxMembers) ||
      (name === "maxMembers" &&
        values.minMembers &&
        parseInt(value) < values?.minMembers)
    ) {
      return;
    }
    setValues({ ...values, [name]: value });
  };

  return {
    handleChange,
    values,
  };
};
