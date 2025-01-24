import React from 'react'
import { matches } from '../utils/Matches'

const classes = {
    container: 'selector',
    select: 'selector__select',
    button: 'selector__button'
}

type SelectorType = {
    setPage: React.Dispatch<React.SetStateAction<number>>
    page: number
}

const Selector: React.FC<SelectorType> = (prop) => {
    const { setPage, page } = prop
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target
        if (value === '') window.location.href = ""
        else window.location.href = `#fecha-${value}`
    }

    const handleClick = () => setPage(2)

    return (
        <section className={`${classes.container} page-${page}`}>
            {page === 1 && (
                <>
                    <select
                        name="Selecciona la fecha"
                        className={classes.select}
                        id=""
                        onChange={handleChange}
                        aria-label='Selecciona la fecha'>
                        <option value="">Selecciona la fecha</option>
                        {matches.map((element) => (
                            <option key={element.date} value={element.date}>Fecha {element.date}</option>
                        ))}
                    </select>
                    <button className={classes.button} onClick={handleClick}>Descarga e imprime</button>
                </>
            )}
            {
                page === 2 && <button onClick={() => setPage(1)} type="button" className={classes.button}>Inicio</button>
            }
        </section>
    )
}

export default Selector