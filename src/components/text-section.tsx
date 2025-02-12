import React from "react"
import { domainAssets } from "../utils/constants"

const classes = {
    container: 'text-section',
    firstText: 'text-section__first-text',
    secondText: 'text-section__second-text',
    description: 'text-section__description'
}

const TextSection: React.FC = () => {
    return (
        <section className={classes.container} id="text-section">
            <p className={classes.firstText}>No todas las apariciones son el principio de una bonita historia. Las hay que, al contrario, muestran el epílogo o, para entrar en contexto con el fútbol peruano, el camino de que todo tiempo pasado fue mejor. En los últimos años de la Liga 1, han pasado historias de todo tipo: estrellas en el final de su carrera, promesas que desaparecieron y debutantes que invitaban, como todo hincha, a soñarlos marcando la pauta en un futuro en la Selección.</p>
            <p className={classes.secondText}>Sin embargo, con el pasar de los años, no hay un nuevo ‘9’ peruano que haya salido como goleador en nuestro torneo. Esta es la data.</p>
            <div className={classes.description}>
                <p>Conoce a todos los goleadores del fútbol peruano desde el 2001</p>
                <img src={`${domainAssets}icons/icon-touch.png`} alt="Elige el año" />
            </div>
        </section>
    )
}

export default TextSection