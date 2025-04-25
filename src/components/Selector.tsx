import React from "react";

const classes = {
  container: "selector",
  select: "selector__select",
  button: "selector__button",
};

type SelectorType = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};

const Selector: React.FC<SelectorType> = (prop) => {
  const { setPage, page } = prop;

  const handleClick = (i: number) => setPage(i);

  return (
    <section className={classes.container}>
      <button
        className={`${classes.button} ${page === 1 && "selected"}`}
        onClick={() => handleClick(1)}
      >
        Por equipos
      </button>
      <button
        className={`${classes.button} ${page === 2 && "selected"}`}
        onClick={() => handleClick(2)}
      >
        Por jugadores
      </button>
    </section>
  );
};

export default Selector;
