import * as React from 'react'
import { urlAssets } from "../utils/constants"

const clasics = [
    {team1: 'river-plate', team2: 'boca-juniors', serie1: 3, serie2: 2, triunfo1: 9, triunfo2: 11, empates: 8, pais: 'argentina'},
    {team1: 'bolivar', team2: 'the-strongest', serie1: 1, serie2: 0, triunfo1: 2, triunfo2: 0, empates: 4, pais: 'bolivia'},
    {team1: 'flamengo', team2: 'corinthians', serie1: 2, serie2: 0, triunfo1: 4, triunfo2: 1, empates: 1, pais: 'brasil'},
    {team1: 'colo-colo', team2: 'universidad-chile', serie1: 0, serie2: 0, triunfo1: 0, triunfo2: 0, empates: 0, pais: 'chile'},
    {team1: 'america-cali', team2: 'atletico-nacional', serie1: 1, serie2: 1, triunfo1: 6, triunfo2: 4, empates: 1, pais: 'colombia'},
    {team1: 'barcelona-guayaquil', team2: 'emelec', serie1: 2, serie2: 0, triunfo1: 4, triunfo2: 4, empates: 3, pais: 'ecuador'},
    {team1: 'olimpia', team2: 'cerro-porteno', serie1: 1, serie2: 1, triunfo1: 12, triunfo2: 9, empates: 13, pais: 'paraguay'},
    {team1: 'universitario', team2: 'alianza-lima', serie1: 1, serie2: 0, triunfo1: 7, triunfo2: 2, empates: 3, pais: 'peru'},
    {team1: 'penarol', team2: 'nacional', serie1: 1, serie2: 1, triunfo1: 13, triunfo2: 10, empates: 15, pais: 'uruguay'},
    {team1: 'caracas', team2: 'tachira', serie1: 0, serie2: 0, triunfo1: 0, triunfo2: 0, empates: 0, pais: 'venezuela'},
]

const TableClasic: React.FC = () => {
    return (
        <div className='table-clasic'>
            {clasics.map((cls, i) => (
                <>
                    <div className={`table-clasic__clasic ${i===0 && 'first'}`}>
                        <p>- SERIES MANO A MANO -</p>
                        <div className='table-clasic__clasic__description'>
                            <img width={101} height={101} src={`${urlAssets}/img/escudos/${cls.team1}.png`} alt={cls.team1} />
                            <div className='table-clasic__clasic__result'>
                                <p>{`${cls.serie1} - ${cls.serie2}`}</p>
                                <img width={56} height={56} src={`${urlAssets}/img/banderas/${cls.pais}.png`} alt={cls.pais} />
                            </div>
                            <img width={101} height={101} src={`${urlAssets}/img/escudos/${cls.team2}.png`} alt={cls.team2} />
                        </div>
                    </div>
                    <div className='table-clasic__resume'>
                        <p>- PARTIDOS -</p>
                        <div className='table-clasic__resume__numbers'>
                            <div className='table-clasic__resume__text'>
                                <p className='table-clasic__resume__text--title'>Triunfos</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={39}
                                    height={9}
                                    viewBox="0 0 39 9">
                                    <path data-name="Pol\xEDgono 19" d="M19.5 9 0 0h39Z" fill="#fff" />
                                </svg>
                                <p className='table-clasic__resume__text--number'>{cls.triunfo1 === 0 ? '-' : cls.triunfo1}</p>
                            </div>
                            <div className='table-clasic__resume__text'>
                                <p className='table-clasic__resume__text--title'>Empates</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={39}
                                    height={9}
                                    viewBox="0 0 39 9">
                                    <path data-name="Pol\xEDgono 19" d="M19.5 9 0 0h39Z" fill="#fff" />
                                </svg>
                                <p className='table-clasic__resume__text--number'>{cls.empates === 0 ? '-' : cls.empates}</p>
                            </div>
                            <div className='table-clasic__resume__text'>
                                <p className='table-clasic__resume__text--title'>Triunfos</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={39}
                                    height={9}
                                    viewBox="0 0 39 9">
                                    <path data-name="Pol\xEDgono 19" d="M19.5 9 0 0h39Z" fill="#fff" />
                                </svg>
                                <p className='table-clasic__resume__text--number'>{cls.triunfo2 === 0 ? '-' : cls.triunfo2}</p>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default TableClasic