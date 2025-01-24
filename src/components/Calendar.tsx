import React from 'react'
import { urlAssets } from "../utils/constants"

const classes = {
    container: 'calendar',
    firstText: 'calendar__text__first',
    secondText: 'calendar__text__second',
    imgDesktop: 'calendar__img--desktop',
    imgMobile: 'calendar__img--mobile',
}

const Calendar: React.FC = () => {
    return (
        <section className={classes.container}>
            <p className={classes.firstText}>Imprime tu calendario en un A3</p>
            <a href={`${urlAssets}/pdf/depor-a3.pdf`} className={classes.imgDesktop} target='_blank'>
                <img src={`${urlAssets}/img/fixture-desktop.png`} alt="Fixture A3" />
            </a>
            <p className={classes.secondText}>Descárgalo y guárdalo en tu celular</p>
            <a href={`${urlAssets}/pdf/depor-mobile.pdf`} className={classes.imgMobile} target='_blank'>
                <img src={`${urlAssets}/img/fixture-mobile.jpg`} alt="Fixture Mobile" />
            </a>
        </section>
    )
}

export default Calendar