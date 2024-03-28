import "../styles/Filter.scss";

function FilterByName({ onChangeName, value }) {
  const handleChange = (event) => {
    onChangeName(event.target.value);
    console.log(value);
  };
  return (
    <div className="filter-container">
      <input
        className="input-large"
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Escribe aquí tu personaje favorito..."
      />
    </div>
  );
}

export default FilterByName;
