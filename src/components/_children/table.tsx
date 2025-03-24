import React from 'react'
import { urlClubIcons } from '../../utils/constants'
import { teams } from '../../utils/Matches'

interface Props {
    infoDate: {
        date: number,
        matches: Array<{ home: string, away: string }>,        
    }
    setTeamSelected: React.Dispatch<React.SetStateAction<string>>
}

const classes = {
    container: 'fixture__row',
    date: 'fixture__date',
    match: 'fixture__match',
    home: 'fixture__match__home',
    away: 'fixture__match__away',
    versus: 'fixture__match__versus',
    icon: 'fixture__match__icon',
    rest: 'fixture__rest',
}

const FixtureChildTable: React.FC<Props> = (props) => {
    const { infoDate: { date = 1, matches = [] } = {}, setTeamSelected } = props
    return (
        <div id={`fecha-${date}`} className={classes.container}>
            <div className={classes.date}>
                <p>Fecha {date}</p>
            </div>
            {matches?.map((match, i) => (
                <div className={classes.match} key={i}>
                    <button
                        id={`team-${match.home}`}
                        className={classes.home}
                        type='button'
                        onClick={() => setTeamSelected(match.home)}>
                        <img
                            src={`${urlClubIcons}/${match.home}.png?d=1`}
                            alt={teams[match.home]}
                            className={classes.icon} />
                        <p>{teams[match.home]}</p>
                    </button>
                    <div className={classes.versus}>VS.</div>
                    <button
                        id={`team-${match.away}`}
                        className={classes.away}
                        type='button'
                        onClick={() => setTeamSelected(match.away)}>
                        <p>{teams[match.away]}</p>
                        <img src={`${urlClubIcons}/${match.away}.png?d=1`} alt={teams[match.away]} className={classes.icon} />
                    </button>
                </div>
            ))}            
        </div>
    )
}

export default FixtureChildTable