import "../styles/Filter.scss";

function Filters({ onChangeName, value, onChangeSpecie }) {
  const handleChange = (event) => {
    onChangeName(event.target.value);
    console.log(value);
  };

  const handleChangeSpecie = (event) => {
    onChangeSpecie(event.target.value);
  };
  return (
    <form className="filter-container">
      <input
        className="input-large"
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Escribe aquí tu personaje favorito..."
      />
      <select className="input" onChange={handleChangeSpecie}>
        <option value="All">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </form>
  );
}

export default Filters;
