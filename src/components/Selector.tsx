import React from "react";
import { matches } from "../utils/Matches";

const classes = {
  container: "selector",
  select: "selector__select",
  button: "selector__button",
};


const Selector: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (value === "") window.location.href = "";
    else window.location.href = `#fecha-${value}`;
  };


  return (
    <section className={classes.container}>
      <select
        name="Selecciona la fecha"
        className={classes.select}
        id=""
        onChange={handleChange}
        aria-label="Selecciona la fecha"
      >
        <option value="">Selecciona la fecha</option>
        {matches.map((element) => (
          <option key={element.date} value={element.date}>
            Fecha {element.date}
          </option>
        ))}
      </select>
    </section>
  );
};

export default Selector;
