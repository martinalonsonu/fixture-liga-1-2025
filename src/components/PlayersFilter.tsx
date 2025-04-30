import { useFetch } from "../utils/useFetch";
import { teamsArray } from "../utils/Matches";

const PlayersFilter = () => {
  const { filterPlayers, loading } = useFetch();
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

  const convertTeam = (team: string) => {
    const teamNew = teamsArray.find((el) => el.slug === team);
    return teamNew?.name;
  };
  return (
    <div className="select__container alternative">
      {loading ? (
        <div className="spinner" />
      ) : (
        filterPlayers?.map((player, index) => (
          <div key={index} className="select__open__data">
            <img src={player.image} alt={player.player} />
            <div className="select__open__data__text__alternative">
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
              <p className="select__open__data__text__alternative__text">
                {convertTeam(player.team)}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PlayersFilter;
