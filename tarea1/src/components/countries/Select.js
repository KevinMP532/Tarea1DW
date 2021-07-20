import SelectOptions from "./SelectOptions";
import Response from "./Response";
const Select = () => {
  const data = Response();

  return (
    <select>
      <option defaultValue hidden>Countries</option>
      <SelectOptions data = {data}/>
    </select>
  );
};

export default Select;
