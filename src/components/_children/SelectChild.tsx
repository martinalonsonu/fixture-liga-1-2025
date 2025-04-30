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

type TeamPlayerForDate = {
  date: string;
  players: PlayerData[];
}[];

const SelectChild: React.FC<Props> = (props) => {
  const [open, setOpen] = React.useState(false);
  const { team, position } = props;

  const teamPlayerForDate: TeamPlayerForDate = [];

  for (const player of team?.players || []) {
    const existingEntry = teamPlayerForDate.find(
      (entry) => entry.date === player.date
    );

    if (existingEntry) {
      existingEntry.players.push(player);
    } else {
      teamPlayerForDate.push({
        date: player.date,
        players: [player],
      });
    }
  }

  const formatDate = (dateString: string) => {
    const match = dateString.match(/\d+/g);
    if (!match) {
      return;
    }
    const dateParts = match.map(Number);
    const [year, month, day] = dateParts;
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <>
      <button
        type="button"
        className={classes.select}
        onClick={() => setOpen(!open)}
      >
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
      {open && (
        <div className="select__open">
          {teamPlayerForDate.length ? (
            teamPlayerForDate.map((el) => (
              <div key={el.date} className="select__open__wrap">
                <p className="select__open__date">Fecha {el.date}</p>
                {el.players.map((player, index) => (
                  <div key={index} className="select__open__data">
                    <img src={player.image} alt={player.player} />
                    <div className="select__open__data__text">
                      <p>
                        {player.player}{" "}
                        <b>
                          ({player.position}) {" > "}
                        </b>
                        {formatDate(player.birthday)} años
                      </p>
                      <p>{player.minutes}'</p>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p className="select__open__no-players">
              No hay registro de jugadores para este equipo.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default SelectChild;
