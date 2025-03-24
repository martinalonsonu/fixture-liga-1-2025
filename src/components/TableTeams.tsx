import * as React from "react";
import { TeamData } from "../utils/useFetch";
import { urlAssets } from "../utils/constants";
import { ColorRing } from "react-loader-spinner";

interface Props {
  data: TeamData[] | null;
  loading: boolean;
}

const TableTeams: React.FC<Props> = (props) => {
  const { data, loading } = props;
  const [sortedData, setSortedData] = React.useState<TeamData[]>([]);
  const [, setSortConfig] = React.useState<{
    key: keyof TeamData | null;
    direction: "asc" | "desc";
  }>({
    key: null,
    direction: "desc",
  });
  React.useEffect(() => {
    if (data) {
      setSortedData([...data]);
    }
  }, [data]);

  const thRow: { name: string; code: keyof TeamData }[] = [
    { name: "Puntos", code: "points" },
    { name: "P", code: "matches" },
    { name: "G", code: "triumphs" },
    { name: "E", code: "ties" },
    { name: "D", code: "defeats" },
    { name: "+/- G", code: "difference" },
    { name: "Promedio", code: "average" },
  ];

  const orderTeams = (code: keyof TeamData) => {
    setSortConfig((prevConfig) => {
      const isSameColumn = prevConfig.key === code;
      const newDirection =
        isSameColumn && prevConfig.direction === "desc" ? "asc" : "desc";

      const sorted = [...sortedData].sort((a, b) => {
        const numA =
          typeof a[code] === "string"
            ? parseFloat((a[code] as string).replace(",", "."))
            : (a[code] as number);
        const numB =
          typeof b[code] === "string"
            ? parseFloat((b[code] as string).replace(",", "."))
            : (b[code] as number);

        return newDirection === "desc" ? numB - numA : numA - numB;
      });

      setSortedData(sorted);
      return { key: code, direction: newDirection };
    });
  };

  return (
    <>
      {loading ? (
        <div className="table-teams__spinner">
          <ColorRing
            visible={true}
            height="280"
            width="280"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#F2C261", "#F2C261", "#F2C261", "#F2C261", "#F2C261"]}
          />
        </div>
      ) : (
        <table className="table-teams">
          <thead className="table-teams__thead">
            <tr>
              <th></th>
              <th></th>
              {thRow.map((el, i) => (
                <th
                  className={`table-teams__item__column ${
                    el.code === "points" && "points"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => orderTeams(el.code)}
                    key={i}
                    className="table-teams__item__column__button"
                  >
                    <p>{el.name}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 322 511.21"
                    >
                      <path
                        fillRule="nonzero"
                        d="M295.27 211.54H26.71c-6.23-.02-12.48-2.18-17.54-6.58-11.12-9.69-12.29-26.57-2.61-37.69L144.3 9.16c.95-1.07 1.99-2.1 3.13-3.03 11.36-9.4 28.19-7.81 37.58 3.55l129.97 157.07a26.65 26.65 0 0 1 7.02 18.06c0 14.76-11.97 26.73-26.73 26.73M26.71 299.68l268.56-.01c14.76 0 26.73 11.97 26.73 26.73 0 6.96-2.66 13.3-7.02 18.06L185.01 501.53c-9.39 11.36-26.22 12.95-37.58 3.55-1.14-.93-2.18-1.96-3.13-3.03L6.56 343.94c-9.68-11.12-8.51-28 2.61-37.69 5.06-4.4 11.31-6.56 17.54-6.57"
                      />
                    </svg>
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData?.length &&
              loading === false &&
              sortedData?.map((team, i) => (
                <tr className="table-teams__item" key={`${team.team}-${i}`}>
                  <td className="table-teams__item__number">{`${i + 1}.`}</td>
                  <td className="table-teams__item__team">
                    <img
                      width={31}
                      height={31}
                      src={`${urlAssets}/img/escudos/${team.slug}.png?d=2`}
                      alt={team.team}
                    />
                    <div className="table-teams__item__team__name">
                      <p>{team.team}</p>
                      <span>{team.country}</span>
                    </div>
                  </td>
                  <td className="table-teams__item__row points">
                    {team.points}
                  </td>
                  <td className="table-teams__item__row">{team.matches}</td>
                  <td className="table-teams__item__row">{team.triumphs}</td>
                  <td className="table-teams__item__row">{team.ties}</td>
                  <td className="table-teams__item__row">{team.defeats}</td>
                  <td className="table-teams__item__row">{team.difference}</td>
                  <td className="table-teams__item__row">{team.average}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TableTeams;
