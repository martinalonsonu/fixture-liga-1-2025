import React from "react"
import { domainAssets } from "../utils/constants"

const classes = {
    container: 'video-section',
    text: 'video-section__text',
    video: 'video-section__video'
}

const VideoPlayer: React.FC = () => {
    return (
        <section className={classes.container} id="video-section">
            <h1 className={classes.text}>¿Por qué no sale un nueve en el Perú?</h1>
            <video autoPlay loop muted playsInline className={classes.video}>
                <source src={`${domainAssets}video/video-portada.mp4`} type="video/mp4" />
            </video>
            <a href="#text-section" className="video-section__arrow">
                <img src={`${domainAssets}icons/arrow-down.png`} alt="Desplazamiento a la siguiente sección" />
            </a>
        </section>
    )
}

export default VideoPlayer