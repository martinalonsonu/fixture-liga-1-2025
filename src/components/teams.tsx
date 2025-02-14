import ButtonDescription from "./children/description"
import InfiniteScroll from "./scroll"

const classes = {
    container: 'teams',
    text: 'teams__text'
}

const Teams = () => {
    return (
        <section className={classes.container}>
            <ButtonDescription isScroll/>
            <p className={classes.text}>Los 19 técnicos de la Liga 1 ya tienen todo listo para afrontar la temporada 2025. Conoce las posibles alineaciones que mandarán en el campo.</p>
            <InfiniteScroll />
        </section>
    )
}

export default Teams