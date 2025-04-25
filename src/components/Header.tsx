import React from "react";
import { urlAssets, epigraph } from "../utils/constants";

const classes = {
  container: "header",
  liga1: "header__first-icon",
  title: "header__title",
  subtitle: "header__second-icon",
  epigraph: "header__epigraph",
};

const Header: React.FC = () => {
  const images = {
    liga1: { src: `${urlAssets}/img/liga1.png`, alt: "Liga 1" },
    extra: {
      src: `${urlAssets}/img/menores-header.png`,
      alt: "Tabla de los clubes que apuestan por menores",
    },
  };
  return (
    <header className={classes.container}>
      <img
        src={images.extra.src}
        alt={images.extra.alt}
        width={652}
        height={227}
        className={classes.subtitle}
      />
      <p className={classes.epigraph}>{epigraph}</p>
    </header>
  );
};

export default Header;
