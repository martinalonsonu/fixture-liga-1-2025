import { useEffect, useState } from "react";
import { domainAssets } from "../utils/constants"

const years = Array.from({ length: 2024 - 2001 + 1 }, (_, i) => {
    const year = 2024 - i;
    return {
      name: year,
      normal: `${domainAssets}years/${year}.png`,
      hover: `${domainAssets}years/variant/${year}.png`,
      link: `#${year}`,
    };
  });

  const preloadImages = () => {
    years.forEach(({ hover }) => {
      const img = new Image();
      img.src = hover;
    });
  };

const YearSection = () => {
    const [hoveredYear, setHoveredYear] = useState<null|number>(null);
    useEffect(() => {
        preloadImages();
      }, []);
    return (
        <section className="year-section">
          {years.map(({ name, normal, hover, link }) => (
            <a
              key={name}
              href={link}
              className="year-section__year"
              onMouseEnter={() => setHoveredYear(name)}
              onMouseLeave={() => setHoveredYear(null)}
            >
              <img
                src={hoveredYear === name ? hover : normal}
                alt={`Año ${name}`}                
              />
            </a>
          ))}
        </section>
      );
}

export default YearSection