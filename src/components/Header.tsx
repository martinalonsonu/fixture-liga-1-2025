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
    liga1: {
      src: `${urlAssets}/img/liga-femenina.png?d=2`,
      alt: "Liga Femenina",
    },
    extra: {
      src: `${urlAssets}/img/apertura-clausura.png`,
      alt: "Apertura y Clausura - Liga Femenina",
    },
  };
  return (
    <header className={classes.container}>
      <img
        src={images.liga1.src}
        alt={images.liga1.alt}
        width={210}
        height={98}
        className={classes.liga1}
      />
      <h1 className={classes.title}>FIXTURE</h1>
      <img
        src={images.extra.src}
        alt={images.extra.alt}
        width={377}
        height={92}
        className={classes.subtitle}
      />
      <p className={classes.epigraph}>{epigraph}</p>
    </header>
  );
};

export default Header;
