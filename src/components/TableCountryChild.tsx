import React, { useState } from "react"
import { TeamData } from "../utils/useFetch"
import { urlAssets } from "../utils/constants"

interface TableCountryChildTypes {
    order: number
    country: string
    points: number
    teams: TeamData[]
}

const TableCountryChild: React.FC<TableCountryChildTypes> = (props) => {
    const {order, country, points, teams} = props
    const [open, setOpen] = useState<boolean>(false)

    function quitarTildesYMinusculas(str: string) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      }            

    return (
        <>
            <button type="button" onClick={()=>setOpen(!open)} className="table-country__button">
                <div className="table-country__button__description">
                    <img src={`${urlAssets}/img/banderas/${quitarTildesYMinusculas(country)}.png`} alt={country} width={44} height={44}/>
                    <p className="table-country__button__text">{order}. {country} <span>{'>'} {points} PUNTOS</span></p>  
                </div>
                <svg
                    width={20}
                    height={20}
                    className="table-country__button__svg"
                    viewBox="0 0 96 96"                    
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M81.846 25.388a6.024 6.024 0 0 0-8.45.767L48 56.625l-25.396-30.47a5.999 5.999 0 1 0-9.211 7.689l30.001 36.001a5.997 5.997 0 0 0 9.212 0l30.001-36.002a6.01 6.01 0 0 0-.761-8.455" />
                </svg>              
            </button>        
            {open && (
                <div className="table-country__teams">
                    {teams.map((el)=>(
                        <div className="table-country__teams__row">
                                <img width={31} height={31} src={`${urlAssets}/img/escudos/${el.slug}.png`} alt={el.team} />
                            <div className="table-country__teams__row__points">
                                <p>{el.team}</p>
                            <span>{el.points} puntos</span>
                            </div>
                        </div>
                    ))}
                </div>
            )
            }
        </>
    )

}

export default TableCountryChild