import { Link } from 'react-router-dom';

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import './TimeLine.css'

const PressIcon = () => <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path fill="#fff" d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"/></svg>
const TicketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path fill="#fff" d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"/></svg>
const PresentationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path fill="#414141" d="M192 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-8 384V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V192h56 64 16c17.7 0 32-14.3 32-32s-14.3-32-32-32H384V64H576V256H384V224H320v48c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48v80H243.1 177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32z"/></svg>
const StartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path fill="#fff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>

const TimeLine = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                contentStyle={{ background: '#fff', color: '#000' }}
                date={<span className="rubik-date">22/12/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-subtitle">A ràdio Girona, emeten una entrevista realitzada a 3 dels membres dels Pastorets de Girona </h4>
                <p className="rubik-text">
                    Aquí podem escoltar a la Marta Nadal, tècnic de llums i so, Joan Cano, encarregat de la gestió de personal i David Vilanova, tresorer, respondre una entrevista al programa els 4 rius.
                </p>
                <Link to="https://www.ivoox.com/els-4-rius-girona-recupera-els-pastorets-audios-mp3_rf_121490526_1.html" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">VEURE MÉS</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: '#fff', color: '#000' }}
                date={<span className="rubik-date">13/12/2023</span>}
                iconStyle={{ background: '#1D1D1D', color: '#fff' }}
                icon={<TicketIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">L'obra</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-subtitle">Comença el trasllat cap al Teatre Municipal de Girona!</h4>
                <p className="rubik-text">
                Ja encarem la recta final, arribem al Teatre Municipal de Girona on fem els darrers assajos amb tot el material que necessitem.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: '#fff', color: '#000' }}
                date={<span className="rubik-date">05/12/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-subtitle">A TV Girona fan una entrevista al director</h4>
                <p className="rubik-text">
                Aquí podem veure durant els primers minuts de programa que cada cop queda menys, però que ho estem enfrontant amb molta il·lusió.
                </p>
                <Link to="https://tvgirona.com/capitol/tv_girona_video/899/" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">VEURE MÉS</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: '#fff', color: '#000' }}
                date={<span className="rubik-date">03/12/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-subtitle">Benvinguda als Pastorets</h4>
                <p className="rubik-text">
                El periodista Jordi Roura publica al Diari de Girona un article que donen la benvinguda als Pastorets de Girona a la nostre ciutat.
                </p>
                <Link to="https://www.diaridegirona.cat/opinio/2023/12/03/benvinguda-als-pastorets-95395053.html" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">VEURE MÉS</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: '#fff', color: '#000' }}
                date={<span className="rubik-date">03/12/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-subtitle">Les tradicions de sempre també es renoven</h4>
                <p className="rubik-text">
                La periodista Olga Vallejo publica al Diari Ara com la tradició s'adapta als canvis de la societat. Explica el retorn dels Pastorets de Girona i la creació de l'Associació Pastorets de Girona.
                </p>
                <Link to="https://www.ara.cat/especials/nadal/tradicions-sempre-tambe-renoven_1_4868886.html" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">VEURE MÉS</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: '#fff', color: '#000' }}
                date={<span className="rubik-date">02/12/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-subtitle">Els Pastorets: una tradició arrelada al país i al jovent</h4>
                <p className="rubik-text">
                    Vilaweb informa que la Coordinadora de Pastorets de Catalunya ha presentat la nova temporada dels Pastorets, que compta amb més de 250 funcions a arreu de Catalunya.
                </p>
                <p className="rubik-text">Destaca que una de les novetat és la reincorporació dels Pastorets de Girona.</p>
                <Link to="https://www.vilaweb.cat/noticies/pastorets-tradicio-principat/" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">VEURE MÉS</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: '#fff', color: '#000' }}
                date={<span className="rubik-date">01/12/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-subtitle">La temporada de Pastorets comptarà amb més de 250 representacions</h4>
                <p className="rubik-text">
                La República informa que Coordinadora de Pastorets de Catalunya ha presentat la nova temporada dels Pastorets 2023-2024.  Comptarà amb més de 250 funcions i destaca l'assistència arreu del territori català, on es calcula entre 60.000 i 65.000 espectadors.
                </p>
                <p className="rubik-text">
                Destaca que la Coordinadora celebra la reincorporació dels Pastorets de Girona, que, després d’un any sense representacions a la capital gironina, tornen amb una proposta renovada i emocionant.
                </p>
                <Link to="https://www.larepublica.cat/minut-a-minut/la-temporada-de-pastorets-comptara-amb-mes-de-250-representacions/" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">VEURE MÉS</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: '#fff', color: '#000' }}
                date={<span className="rubik-date">01/12/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-subtitle">Els Pastorets de Girona al Búnquer Confidencial de Catalunya Ràdio</h4>
                <p className="rubik-text">
                Tres membres de l'Associació Pastorets de Girona van assistir a El Búnquer Confidencial a l'Auditori de Girona. A l'acabar l'esdeveniment, van fer entrega de la totebag dels Pastorets de Girona, als tres protagonistes, Peyu, Jair i Neus.
                </p>
                <p className="rubik-text">
                El mateix dia, van compartir una publicació a l'Instagram @elbunquercatradio, on es mostra la tote bag juntament amb una carta d'agraïment i suport que van rebre amb gran afecte.
                </p>
                <Link to="https://www.instagram.com/p/C0Uo8mwtydB/" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">VEURE MÉS</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: '#fff', color: '#000' }}
                date={<span className="rubik-date">13/11/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-subtitle">El nou pòster dels Pastorets de Girona surt a TV Girona</h4>
                <p className="rubik-text">
                A partir del minut 14:30 fins al 16:40, es realitza un resum que destaca la presentació del cartell a la Plaça dels Apòstols de la ciutat. També s'entrevista el director de l'obra, Salvi de Castro, i l'artista del pòster, Pau Morales.
                </p>
                <Link to="https://tvgirona.com/capitol/tv_girona_video/815/" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">VEURE MÉS</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: '#fff', color: '#000' }}
                date={<span className="rubik-date">11/11/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-subtitle">El diari El Punt Avui publica</h4>
                <p className="rubik-text">
                Els Pastorets canvien d'imatge
                </p>
                <Link to="https://www.elpuntavui.cat/cultura/article/19-cultura/2354385-els-pastorets-canvien-d-imatge.html?utm_source=whatsapp&utm_medium=botons&utm_campaign=com_epanoticies" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">LLEGIR MÉS</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: '#fff', color: '#000' }}
                date={<span className="rubik-date">11/11/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-subtitle">El Diari de Girona publica</h4>
                <p className="rubik-text">
                Aquest és el cartell dels nous Pastorets de Girona.
                </p>
                <Link to="https://www.diaridegirona.cat/girona/2023/11/11/aquest-cartell-dels-nous-pastorets-94494917.html" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">LLEGIR MÉS</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{ background: '#FFFFFF', color: '#000' }}
                date={<span className="rubik-date">11/11/2023</span>}
                iconStyle={{ background: '#DADADA', color: '#fff' }}
                icon={<PresentationIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-subtitle">Presentació del cartell</h4>
                <p className="rubik-text">
                La presentació del cartell va tenir lloc a la Plaça dels Apòstols a les 11:30h.
                </p>
                <Link to="https://www.pastoretsdegirona.cat/" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">EL CARTELL</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<span className="rubik-date">20/10/2023</span>}
                iconStyle={{ background: '#1D1D1D', color: '#fff' }}
                icon={<TicketIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Entrades</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-subtitle">Inici de la venda</h4>
                <p className="rubik-text">
                Ja pots adquirir les entrades, tant a la taquilla del Teatre Municipal de Girona com a través de la nostra pàgina web.
                </p>
                <Link to="https://www.pastoretsdegirona.cat/" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">COMPRAR</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<span className="rubik-date">16/10/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-title">El diari El Gerió Digital publica</h4>
                <p className="rubik-text">
                    Les entrades pels Pastorets de Girona es posen a la venda divendres.
                </p>
                <Link to="https://www.gerio.cat/noticia/1636391/les-entrades-pels-pastorets-de-girona-es-posen-a-la-venda-divendres" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">Llegir més</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<span className="rubik-date">18/09/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-title">Sentim a parlar dels Pastorets de Girona a CatRàdio</h4>
                <p className="rubik-text">
                A partir del minut 47:13 fins al 49:07, fan un resum on s'explica que recuperarem els Pastorets de Girona.
                </p>
                <Link to="https://www.ccma.cat/catradio/alacarta/catalunya-al-dia/catalunya-al-dia-de-13-a-14-h-18092023/audio/1182543/?ext=SMA_WP_F4_CE24_" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">Escoltar</div>
                </Link>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<span className="rubik-date">18/09/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-title">El Diari de Girona publica</h4>
                <p className="rubik-text">
                Uns Pastorets "renovats" tornen a Girona aquest Nadal
                </p>
                <Link to="https://www.diaridegirona.cat/girona/2023/09/18/uns-pastorets-renovats-tornen-girona-92232146.html" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">Llegir més</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<span className="rubik-date">18/09/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-title">El diari El Punt Avui publica</h4>
                <p className="rubik-text">
                Un tiktoker a Els Pastorets de Girona
                </p>
                <Link to="https://www.elpuntavui.cat/societat/article/5-societat/2334718-un-tiktoker-a-els-pastorets-de-girona.html?utm_source=whatsapp&utm_medium=botons&utm_campaign=com_epanoticies" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">Llegir més</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<span className="rubik-date">18/09/2023</span>}
                iconStyle={{ background: '#D91E01', color: '#fff' }}
                icon={<PressIcon />}
            >
                <h3 className="vertical-timeline-element-title rubik-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle rubik-title">L'Ajuntament de Girona publica</h4>
                <p className="rubik-text">
                La ciutat de Girona recupera aquest Nadal "Els Pastorets"
                </p>
                <Link to="https://web.girona.cat/noticies?id=11677384&fbclid=PAAaZmaZ8WbQCy_SEWVtYWREw_h2d5oK_nyfS3ZEYHsEISwkTFPt_dn63x2m0_aem_ARaUrmRPW2Ensm01g-_wkNpXqRI8xKaMA0IfKNITI01jeuT3GHlXTVMpKIxwGRDLnQk" target="_blank" rel="noopener noreferrer" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">Llegir més</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: '#DADADA', color: '#000' }}
                icon={<StartIcon />}
            />
        </VerticalTimeline>
    )
}

export default TimeLine
