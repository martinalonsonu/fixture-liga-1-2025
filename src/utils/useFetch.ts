import { useState, useEffect } from "react";
import { googleSheetKey } from "./constants";

export interface TeamData {
    team: string;
    slug: string;
    country: string;
    matches: number;
    triumphs: number;
    ties: number;
    defeats: number;
    difference: number;
    points: number;
    average: number;
}

export interface GroupedTeamData {
    country: string;
    points: number;
    teams: TeamData[];
}

interface FetchState {
    data: TeamData[] | null;
    groupedData: GroupedTeamData[] | null;
    error: Error | null;
    loading: boolean;
}

export const useFetch = (): FetchState => {
    const [data, setData] = useState<TeamData[] | null>(null);
    const [groupedData, setGroupedData] = useState<GroupedTeamData[] | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = "SELECT A, B, C, D, E, F, G, H, I, J, K";
                const response = await fetch(
                    `https://docs.google.com/spreadsheets/d/${googleSheetKey}/gviz/tq?tq=${encodeURIComponent(query)}`
                );
                const text = await response.text();
                const json = JSON.parse(text.substring(47, text.length - 2));

                const dataTeams: TeamData[] = json?.table?.rows?.map((row: { c: { v?: string | number; f?: string | number }[] }) => {
                    const cells = row.c || [];
                    return {
                        team: (cells[1]?.v as string) || "",
                        slug: (cells[2]?.v as string) || "",
                        country: (cells[3]?.v as string) || "",
                        matches: (cells[4]?.v as number) || 0,
                        triumphs: (cells[5]?.v as number) || 0,
                        ties: (cells[6]?.v as number) || 0,
                        defeats: (cells[7]?.v as number) || 0,
                        difference: (cells[8]?.v as number) || 0,
                        points: (cells[9]?.v as number) || 0,
                        average: (cells[10]?.f as number) || 0,
                    };
                }) || [];

                const groupedTeams = Object.values(
                    dataTeams.reduce<{ [key: string]: GroupedTeamData }>((acc, team) => {
                        if (!acc[team.country]) {
                            acc[team.country] = { country: team.country, points: 0, teams: [] };
                        }
                        acc[team.country].points += team.points; 
                        acc[team.country].teams.push(team); 
                        return acc;
                    }, {})
                ).sort((a, b) => b.points - a.points); 

                setData(dataTeams.sort((a, b) => b.points - a.points));
                setGroupedData(groupedTeams);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, groupedData, error, loading };
};