function FilterByName({ onChangeName, value }) {
  const handleChange = (event) => {
    onChangeName(event.target.value);
    console.log(value);
  };
  return (
    <div>
      <label htmlFor="">Filtro por nombre</label>
      <input type="text" onChange={handleChange} value={value} />
    </div>
  );
}

export default FilterByName;
