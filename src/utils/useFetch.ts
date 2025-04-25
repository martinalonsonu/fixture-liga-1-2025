import { useState, useEffect } from "react";
import { googleSheetKey } from "./constants";
import { teamsArray } from "./Matches";

export interface PlayerData {
  date: string;
  team: string; // Este campo debería contener el slug del equipo
  player: string;
  birthday: string;
  position: number;
  minutes: number;
}

interface FetchState {
  data: PlayerData[] | null;
  error: Error | null;
  loading: boolean;
  processedTeams: Array<{
    name: string;
    slug: string;
    minutes: number;
    players: PlayerData[];
  }>;
}

export const useFetch = (): FetchState => {
  const [data, setData] = useState<PlayerData[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [processedTeams, setProcessedTeams] = useState<
    FetchState["processedTeams"]
  >(() => {
    return teamsArray.map((team) => ({
      name: team.name,
      slug: team.slug,
      minutes: 0,
      players: [],
    }));
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = "SELECT A, B, C, D, E, F";
        const response = await fetch(
          `https://docs.google.com/spreadsheets/d/${googleSheetKey}/gviz/tq?tq=${encodeURIComponent(
            query
          )}`
        );
        const text = await response.text();
        const json = JSON.parse(text.substring(47, text.length - 2));

        const rawData: PlayerData[] =
          json?.table?.rows?.map(
            (row: { c: { v?: string | number; f?: string | number }[] }) => {
              const cells = row.c || [];
              return {
                date: cells[0]?.v?.toString() || "",
                team: cells[1]?.v?.toString() || "",
                player: cells[2]?.v?.toString() || "",
                birthday: cells[3]?.v?.toString() || "",
                position: Number(cells[4]?.v) || 0,
                minutes: Number(cells[5]?.v) || 0,
              };
            }
          ) || [];

        setData(rawData);

        const slugToTeamMap = new Map<string, (typeof teamsArray)[0]>();
        teamsArray.forEach((team) => {
          slugToTeamMap.set(team.slug, team);
        });

        const updatedTeams = teamsArray.map((team) => {
          const teamPlayers = rawData.filter(
            (player) =>
              player.team.trim().toLowerCase() ===
              team.slug.trim().toLowerCase()
          );

          const totalMinutes = teamPlayers.reduce(
            (sum, player) => sum + player.minutes,
            0
          );

          return {
            ...team,
            minutes: totalMinutes,
            players: teamPlayers,
          };
        });

        setProcessedTeams(updatedTeams.sort((a, b) => b.minutes - a.minutes));
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    error,
    loading,
    processedTeams,
  };
};
