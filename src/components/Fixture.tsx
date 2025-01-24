import { useEffect, useState } from 'react'
import { matches } from '../utils/Matches'
import FixtureChildTable from './_children/table'

const Fixture: React.FC = () => {
    const [teamSelected, setTeamSelected] = useState<string>('')
    console.log(teamSelected)

    useEffect(() => {
        const elements = document.querySelectorAll('.fixture__match__home, .fixture__match__away');
        elements.forEach(element => {
            element.classList.remove('active');
        });

        if (teamSelected) {
            const elements = document.querySelectorAll(`#team-${teamSelected}`)
            elements.forEach(element => {
                element.classList.add('active');
            });
        }
    }, [teamSelected]);
    return (
        <section className='fixture'>{matches.map((date) => (
            <FixtureChildTable key={date.date} infoDate={date} setTeamSelected={setTeamSelected} />
        ))}</section>
    )
}

export default Fixture

