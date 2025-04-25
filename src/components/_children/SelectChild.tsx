import React from "react";
import { PlayerData } from "../../utils/useFetch";
import { urlAssets } from "../../utils/constants";

interface Props {
  team: {
    name: string;
    slug: string;
    minutes: number;
    players: PlayerData[];
  };
  position: number;
}

const classes = {
  select: "select",
  selectFirst: "select__first",
  flag: "select__flag",
  selectSecond: "select__second",
  position: "select__position",
  team: "select__team",
};

const SelectChild: React.FC<Props> = (props) => {
  const { team, position } = props;
  return (
    <button type="button" className={classes.select}>
      <div className={classes.selectFirst}>
        <div className={classes.position}>{position}</div>
        <div className={classes.team}>
          <img
            src={`${urlAssets}/img/escudos/${team.slug}.png`}
            alt={team.name}
            height={30}
            className={classes.flag}
          />
          <p>{team.name}</p>
        </div>
      </div>
      <div className={classes.selectSecond}>
        <p>{team.minutes}'</p>
        <svg
          width="10"
          height="9"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.5 12 0 4h15z" fill="#000" />
        </svg>
      </div>
    </button>
  );
};

export default SelectChild;
