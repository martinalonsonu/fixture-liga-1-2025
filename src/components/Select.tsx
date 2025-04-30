import { FC } from "react";
import { useFetch } from "../utils/useFetch";
import SelectChild from "./_children/SelectChild";

const SelectComponent: FC = () => {
  const { processedTeams, loading } = useFetch();
  return (
    <section className="select__container">
      {loading ? (
        <div className="spinner" />
      ) : (
        processedTeams.map((team, i) => (
          <SelectChild team={team} position={i + 1} key={team.slug} />
        ))
      )}
    </section>
  );
};

export default SelectComponent;
