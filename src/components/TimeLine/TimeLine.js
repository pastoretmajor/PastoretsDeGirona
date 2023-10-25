import { Link } from 'react-router-dom';

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'; // Asegúrate de importar el archivo CSS de la biblioteca.
import './TimeLine.css'
const WorkIcon = () => <></>
const SchoolIcon = () => <></>
const StarIcon = () => <></>

const TimeLine = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#DADADA', color: '#000' }}
                contentArrowStyle={{ borderRight: '7px solid  #DADADA' }}
                date="11/11/2023"
                iconStyle={{ background: '#DADADA', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Notícia</h3>
                <h4 className="vertical-timeline-element-subtitle">Presentació del cartell</h4>
                <p>
                La presentació del cartell es farà a la plaça de davant de la Catedral a no sé quina hora, en lloc de a les escales com estava previst.
                </p>
                <Link to="https://www.pastoretsdegirona.cat" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">Llegir més</div>
                </Link>   
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="25/10/2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">És avui</h3>
                <h4 className="vertical-timeline-element-subtitle">No sé que posar-hi</h4>
                <p>
                Tot és una prova per tal de mostrar com es veuría a la pàgina web, no cal fer molt de cas a el text que hi ha actualment.
                </p>
                <Link to="https://www.pastoretsdegirona.cat" className="custom-link-button">
                    <div className="circle">
                    <div className="icon arrow"></div>
                    </div>
                    <div className="button-text">Llegir més</div>
                </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                Strategy, Social Media
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                Creative Direction, User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
    )
}

export default TimeLine