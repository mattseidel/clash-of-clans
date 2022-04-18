import { connect, useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import {  updateParams } from "../../store/params/action";
import { Inputcomponent } from "../forms/Inputcomponent";

import "./style.css";
const FilterComponent = () => {
  
  const dispatch = useDispatch();
  
  const data = useSelector((state: any) => state);

  const {handleChange, values} = useForm(data);

  
  

  const {maxMembers,location, warFrequency,minMembers, minClanPoints, name} = values;

  const useUpdate = (event:any) => {
    event.preventDefault();
    dispatch(updateParams({
      maxMembers,
      location,
      warFrequency,
      minMembers,
      name,
      minClanPoints
    }));
  };

  return (
    <div className="card card-position m-2">
      <div className="card-header">Filtrar por</div>
      <ul className="list-group list-group-flush">
        <form onSubmit={useUpdate}>
        <li className="list-group-item ">
            <Inputcomponent placeholder="Nombre del clan" value={name} name="name" onChange={handleChange} />
          </li>
          <li className="list-group-item ">
            <Inputcomponent placeholder="Miembros minimos" type = "range" value={minMembers} range={{min:0, max:50}} name="minMembers" onChange={handleChange}/>
          </li>
          <li className="list-group-item ">
            <Inputcomponent placeholder="Miembros maximos" type = "range" value={maxMembers} range={{min:0, max:50}} name="maxMembers" onChange={handleChange}/>
          </li>
          <li className="list-group-item ">
            <input type="submit" value="Filtrar" className="btn btn-outline-primary btn-block" />
          </li>
        </form>
      </ul>
    </div>
  );
  
};

export const FilterComponentConnected = connect(null, {updateParams})(FilterComponent);