import * as React from 'react'
import { TeamData } from '../utils/useFetch'
import { urlAssets } from '../utils/constants'

interface Props {
    data: TeamData[] | null
    loading: boolean
}

const TableTeams: React.FC<Props> = (props) => {
    const {data, loading} = props
    const [sortedData, setSortedData] = React.useState<TeamData[]>([]);

    React.useEffect(() => {
        if (data) {
            setSortedData([...data]);
        }
    }, [data]);

    const thRow: { name: string; code: keyof TeamData }[] = [
        {name: 'Partidos', code: 'matches'},
        {name: 'Triunfos', code: 'triumphs'},
        {name: 'Empates', code: 'ties'},
        {name: 'Derrotas', code: 'defeats'},
        {name: 'Diferencia', code: 'difference'},
        {name: 'Puntos', code: 'points'},
        {name: 'Promedio', code: 'average'},
    ]

    const orderTeams = (code: keyof TeamData) => {
        setSortedData((prevData) =>
            [...prevData].sort((a, b) => {
                const numA = typeof a[code] === "string" ? parseFloat((a[code] as string).replace(",", ".")) : (a[code] as number);
                const numB = typeof b[code] === "string" ? parseFloat((b[code] as string).replace(",", ".")) : (b[code] as number);
                return numB - numA;
            })
        );
    };

    return (
        <>
                    <div className='table-teams__scroll-icon'>
            <svg
    width={20}
    height={20}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"    
    fill='#fff'
  >
    <path
      d="M291.746 258.115v-84.781c0-30.875-25.125-56-56-56s-56 25.125-56 56v119.43c-10.366-8.697-23.303-13.629-36.893-13.629-16.177 0-31.708 6.854-42.573 18.812-21.01 23.024-19.642 58.547 2.658 80.149.028.029.039.06.067.089l94.328 91.149h208v-176zm70.92 168.552H213.333s-74.738-70.448-82.009-77.073c-8.273-7.536-8.87-20.354-1.333-28.63 7.539-8.274 20.357-8.87 28.631-1.333 5.541 5.046 41.952 35.036 41.952 35.036l16.506-8.534v-172.8c0-10.31 8.358-18.666 18.666-18.666 10.31 0 18.667 8.357 18.667 18.667v117.875l108.253 34.125zm-253.19-220.292c-2.77-10.575-4.396-21.609-4.396-33.041 0-72.042 58.613-130.667 130.666-130.667s130.667 58.625 130.667 130.667c0 11.432-1.626 22.466-4.397 33.041l-40.472-14.01c1.364-6.146 2.202-12.48 2.202-19.031 0-48.524-39.476-88-88-88s-88 39.476-88 88c0 6.552.839 12.885 2.202 19.03z"
      fillRule="evenodd"
    />
  </svg>
  <p>Scrollea horizontalmente</p>
            </div>        
        <div className='table-teams__container'>
            <table className='table-teams'>
        <thead style={{position: 'sticky'}}>
            <tr>
                <th></th>
                <th></th>
                {thRow.map((el,i)=><th className={`table-teams__item__column ${el.code === 'points' && 'points'}`}>
                    <button type='button' onClick={()=>orderTeams(el.code)} key={i} className='table-teams__item__column__button'>
                        <p>{el.name}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            shapeRendering="geometricPrecision"
                            textRendering="geometricPrecision"
                            imageRendering="optimizeQuality"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            viewBox="0 0 322 511.21">
                            <path
                                fillRule="nonzero"
                                d="M295.27 211.54H26.71c-6.23-.02-12.48-2.18-17.54-6.58-11.12-9.69-12.29-26.57-2.61-37.69L144.3 9.16c.95-1.07 1.99-2.1 3.13-3.03 11.36-9.4 28.19-7.81 37.58 3.55l129.97 157.07a26.65 26.65 0 0 1 7.02 18.06c0 14.76-11.97 26.73-26.73 26.73M26.71 299.68l268.56-.01c14.76 0 26.73 11.97 26.73 26.73 0 6.96-2.66 13.3-7.02 18.06L185.01 501.53c-9.39 11.36-26.22 12.95-37.58 3.55-1.14-.93-2.18-1.96-3.13-3.03L6.56 343.94c-9.68-11.12-8.51-28 2.61-37.69 5.06-4.4 11.31-6.56 17.54-6.57"
                            />
                        </svg>
                    </button>
                </th>)}
            </tr>
        </thead>
        <tbody>
            {sortedData?.length && loading===false && sortedData?.map((team, i) =>(
                <tr className='table-teams__item' key={`${team.team}-${i}`}>
                    <td className='table-teams__item__number'>{`${i+1}.`}</td>
                    <td className='table-teams__item__team'>
                        <img width={31} height={31} src={`${urlAssets}/img/escudos/${team.slug}.png?d=2`} alt={team.team} />
                        <div className='table-teams__item__team__name'>
                            <p>{team.team}</p>
                            <span>{team.country}</span>
                        </div>
                    </td>
                    <td className='table-teams__item__row'>{team.matches}</td>
                    <td className='table-teams__item__row'>{team.triumphs}</td>
                    <td className='table-teams__item__row'>{team.ties}</td>
                    <td className='table-teams__item__row'>{team.defeats}</td>
                    <td className='table-teams__item__row'>{team.difference}</td>
                    <td className='table-teams__item__row points'>{team.points}</td>
                    <td className='table-teams__item__row'>{team.average}</td>
                </tr>
        ))}
        </tbody>
    </table>
        </div>
        </>
    )
}

export default TableTeams