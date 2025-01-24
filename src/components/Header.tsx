import React from 'react'
import { urlAssets, epigraph } from '../utils/constants';

const classes = {
    container: 'header',
    liga1: 'header__first-icon',
    title: 'header__title',
    subtitle: 'header__second-icon',
    epigraph: 'header__epigraph'
}

const Header: React.FC<{ page: number }> = (prop) => {
    const { page } = prop
    const images = {
        liga1: { src: `${urlAssets}/img/liga1.png`, alt: 'Liga 1' },
        extra: { src: `${urlAssets}/img/apertura-clausura.png`, alt: 'Apertura y Clausura - Liga 1' }
    }
    return (
        <header className={classes.container}>
            <img src={images.liga1.src} alt={images.liga1.alt} width={156} height={57} className={classes.liga1} />
            <h1 className={classes.title}>FIXTURE</h1>
            <img src={images.extra.src} alt={images.extra.alt} width={377} height={92} className={classes.subtitle} />
            {page === 1 && <p className={classes.epigraph}>{epigraph}</p>}
        </header>
    )
}

export default Header