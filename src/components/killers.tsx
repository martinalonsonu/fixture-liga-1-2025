import React, { useEffect } from "react";

interface FlourishListProps {
  startYear: number;
  endYear: number;
}

const flourishIds: Record<number, string> = {
  2024: "21397299",
  2023: "21397866",
  2022: "21398370",
  2021: "21398626",
  2020: "21399597",
  2019: "21399797",
  2018: "21454825",
  2017: "21454968",
  2016: "21465513",
  2015: "21466698",
  2014: "21467603",
  2013: "21468654",
  2012: "21469902",
  2011: "21471083",
  2010: "21471187",
  2009: "21492491",
  2008: "21494972",
  2007: "21495263",
  2006: "21495396",
  2005: "21495520",
  2004: "21495615",
  2003: "21495749",
  2002: "21495980",
  2001: "21496059",
};

const FlourishList: React.FC<FlourishListProps> = ({ startYear, endYear }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="killers">
      {Object.entries(flourishIds)
        .filter(([year]) => {
          const numYear = Number(year);
          return numYear >= endYear && numYear <= startYear;
        })
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // Ordena de más reciente a más antiguo
        .map(([year, id]) => (
          <div key={year} className="killers__container" id={`${year}`}>
            <h2 className="killers__text">Tabla de goleadores {year}</h2>
            <div
              className="flourish-embed flourish-chart"
              data-src={`visualisation/${id}`}
              data-height="500px"
              style={{ width: "100%" }}
            ></div>
          </div>
        ))}
    </div>
  );
};

export default FlourishList;
