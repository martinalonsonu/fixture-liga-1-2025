import React from "react"
import { domainAssets } from "../../utils/constants"



const ButtonDescription: React.FC<{isScroll: boolean}> = ({isScroll}) => {
    return (
        <div className={`description ${isScroll && 'scroll'}`}>
            <p>{isScroll ? 'Revisa todos los equipos de la Liga 1': 'Conoce a todos los goleadores del fútbol peruano desde el 2001'}</p>
            <img src={`${domainAssets}icons/icon-${isScroll ? 'scroll':'touch'}.png`} alt="Elige el año" />
        </div>
    )
}

export default ButtonDescription