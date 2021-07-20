const SelectOptions = (props) => {
  if (props.data) {
    const names = props.data;
    return names.map((country, index) => {
      return <option key={index} value={country.name.toUpperCase()}>{country.name}</option>;
    });
  }
};

export default SelectOptions;
