import React from 'react'
import { urlPortadaEspeciales, urlEspecial, titleEspecial, twitterAccount } from '../utils/constants'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const classes = {
    container: 'navbar',
    content: 'navbar__content',
    url: 'navbar__link-especiales',
    socials: 'navbar__socials',
    buttons: 'navbar__socials__btn'
}

const Navbar: React.FC = () => {
    const iconFillColor = '#FFF';
    const iconWidth = '16px';
    return (
        <nav className={classes.container}>
            <section className={classes.content}>
                <a href={urlPortadaEspeciales} target='_blank' className={classes.url}>+ ESPECIALES</a>
                <section>
                    <ul className={classes.socials}>
                        <li className={classes.buttons}>
                            <FacebookShareButton
                                url={urlEspecial}
                            >
                                <svg fill={iconFillColor} width={iconWidth} height={iconWidth} viewBox="-6 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.462.173v3.808h-2.265c-.079-.011-.171-.017-.264-.017-.542 0-1.036.203-1.411.538l.002-.002c-.275.384-.439.863-.439 1.381 0 .062.002.124.007.185v-.008 2.726h4.229l-.56 4.27h-3.663v10.946h-4.417v-10.947h-3.68v-4.269h3.68v-3.145c-.007-.102-.011-.222-.011-.342 0-1.478.575-2.822 1.513-3.82l-.003.003c.972-.92 2.288-1.485 3.735-1.485.09 0 .18.002.27.007h-.013c.118-.002.256-.003.395-.003 1.02 0 2.025.064 3.011.188l-.117-.012z" /></svg>
                            </FacebookShareButton>
                        </li>
                        <li className={classes.buttons}>
                            <WhatsappShareButton
                                url={urlEspecial}
                                title={titleEspecial}
                            >
                                <svg fill={iconFillColor} width={iconWidth} height={iconWidth} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.271 13.21c.578.185 1.078.416 1.543.7l-.031-.018c.529.235.986.51 1.403.833l-.015-.011c.02.061.032.13.032.203 0 .011 0 .021-.001.032v-.001c-.015.429-.11.832-.271 1.199l.008-.021c-.231.463-.616.82-1.087 1.01l-.014.005c-.459.243-1.001.393-1.576.411h-.006c-1.1-.146-2.094-.484-2.988-.982l.043.022c-1.022-.468-1.895-1.083-2.636-1.829l-.001-.001c-.824-.857-1.579-1.795-2.248-2.794l-.047-.074c-.636-.829-1.041-1.866-1.1-2.995l-.001-.013v-.124c.032-.975.468-1.843 1.144-2.447l.003-.003c.207-.206.491-.335.805-.341h.001c.101.003.198.011.292.025l-.013-.002c.087.013.188.021.292.023h.003c.019-.002.04-.003.062-.003.13 0 .251.039.352.105l-.002-.001c.107.118.189.261.238.418l.002.008q.124.31.512 1.364c.135.314.267.701.373 1.099l.014.063c-.076.361-.268.668-.533.889l-.003.002q-.535.566-.535.72c.004.088.034.168.081.234l-.001-.001c.405.829.936 1.533 1.576 2.119l.005.005c.675.609 1.446 1.132 2.282 1.54l.059.026c.097.063.213.103.339.109h.002q.233 0 .838-.752t.804-.752zm-3.147 8.216h.022c1.357 0 2.647-.285 3.814-.799l-.061.024c2.356-.994 4.193-2.831 5.163-5.124l.024-.063c.49-1.113.775-2.411.775-3.775s-.285-2.662-.799-3.837l.024.062c-.994-2.356-2.831-4.193-5.124-5.163l-.063-.024c-1.113-.49-2.411-.775-3.775-.775s-2.662.285-3.837.799l.062-.024c-2.356.994-4.193 2.831-5.163 5.124l-.024.063c-.49 1.117-.775 2.419-.775 3.787 0 2.141.698 4.12 1.879 5.72l-.019-.026-1.225 3.613 3.752-1.194c1.49 1.01 3.327 1.612 5.305 1.612h.047zm0-21.426h.033c1.628 0 3.176.342 4.575.959l-.073-.029c2.825 1.197 5.028 3.4 6.196 6.149l.029.076c.588 1.337.93 2.896.93 4.535s-.342 3.198-.959 4.609l.029-.074c-1.197 2.825-3.4 5.028-6.149 6.196l-.076.029c-1.327.588-2.875.93-4.503.93-.011 0-.023 0-.034 0h.002c-.016 0-.034 0-.053 0-2.059 0-3.992-.541-5.664-1.488l.057.03-6.465 2.078 2.109-6.279c-1.051-1.714-1.674-3.789-1.674-6.01 0-1.646.342-3.212.959-4.631l-.029.075c1.197-2.825 3.4-5.028 6.149-6.196l.076-.029c1.327-.588 2.875-.93 4.503-.93h.033-.002z" /></svg>
                            </WhatsappShareButton>
                        </li>
                        <li className={classes.buttons}>
                            <TwitterShareButton
                                url={urlEspecial}
                                title={titleEspecial}
                                via={twitterAccount}
                            >
                                <svg fill={iconFillColor} width={iconWidth} height={iconWidth} viewBox="0 0 512 462.799"><path fillRule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z" /></svg>
                            </TwitterShareButton>
                        </li>
                    </ul>
                </section>
            </section>
        </nav>
    )
}

export default Navbar