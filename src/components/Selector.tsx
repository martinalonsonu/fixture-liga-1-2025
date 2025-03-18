import React from 'react'

const classes = {
    container: 'selector',
    button: 'selector__button'
}

type SelectorType = {
    setPage: React.Dispatch<React.SetStateAction<number>>
    page: number
}

const Selector: React.FC<SelectorType> = (prop) => {
    const { setPage, page } = prop

    const handleClick = (i:number) => setPage(i)

    return (
        <section className={classes.container}>
            <button type='button' className={`${classes.button} ${page === 1 && 'active'}`} onClick={()=>handleClick(1)}>Tabla general</button>
            <button type='button' className={`${classes.button} ${page === 2 && 'active'}`} onClick={()=>handleClick(2)}>Por países</button>
            <button type='button' className={`${classes.button} ${page === 3 && 'active'}`} onClick={()=>handleClick(3)}>Los clásicos</button>
        </section>
    )
}

export default Selector