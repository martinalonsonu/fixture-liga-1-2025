import React from 'react'
import { urlAssets, epigraph, epigraph2 } from '../utils/constants';

const classes = {
    container: 'header',
    liga1: 'header__first-icon',
    title: 'header__title',
    subtitle: 'header__second-icon',
    epigraph: 'header__epigraph'
}

const Header: React.FC = () => {
    
    const images = {
        libertadores: { src: `${urlAssets}/img/logo-libertadores.png`, alt: 'Copa Libertadores' },        
    }
    return (
        <header className={classes.container}>
            <img src={images.libertadores.src} alt={images.libertadores.alt} width={144} height={119} className={classes.liga1} />
            <h1 className={classes.title}>TABLA HISTÓRICA DE<br/>LA COPA LIBERTADORES</h1>            
            <p className={classes.epigraph}>{epigraph} <span>{epigraph2}</span></p>
        </header>
    )
}

export default Header