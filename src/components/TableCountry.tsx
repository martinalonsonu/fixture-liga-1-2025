import * as React from 'react'
import { GroupedTeamData } from "../utils/useFetch"
import TableCountryChild from "./TableCountryChild"

interface Props {
    groupedData: GroupedTeamData[] | null
}

const TableCountry: React.FC<Props> = (props) => {
    const {groupedData} = props

    console.log(groupedData)
    return (
        <div className="table-country">
            {groupedData?.length && groupedData.map((country, i)=>(
                <TableCountryChild order={i+1} country={country.country} points={country.points} teams={country.teams}/>
            ))}
        </div>
    )
}

export default TableCountry