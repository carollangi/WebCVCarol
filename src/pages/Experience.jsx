import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaPython } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function Experience() {
  return (
    <>
    <Navbar/>
        <div className="wrapper">
            <h1>Experience</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - 2020"
                    iconStyle={{ background: 'pink', color: '#fff' }}
                    icon={<CiStar />}
            >
                    <h3 className="vertical-timeline-element-title">SMP</h3>
                    <h4 className="vertical-timeline-element-subtitle">SLADOR</h4>
                    <p>
                        TIK
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020 - 2022"
                    iconStyle={{ background: 'pink', color: '#fff' }}
                    icon={<FaStar />}
            >
                    <h3 className="vertical-timeline-element-title">SMA</h3>
                    <h4 className="vertical-timeline-element-subtitle">SLADOR</h4>
                    <p>
                        TIK
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022 - Present"
                    iconStyle={{ background: 'pink', color: '#fff' }}
                    icon={<FaPython />}
            >
                    <h3 className="vertical-timeline-element-title">College Student</h3>
                    <h4 className="vertical-timeline-element-subtitle">UNKLAB, Indonesia</h4>
                    <p>
                        Computer Programming: Python
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2023 - Present"
                    iconStyle={{ background: 'pink', color: '#fff' }}
                    icon={<FaHtml5 />
                    }
            >
                    <h3 className="vertical-timeline-element-title">Student</h3>
                    <h4 className="vertical-timeline-element-subtitle">UNKLAB, Indonesia</h4>
                    <p>
                        Web Design: Html 
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2024 - Present"
                    iconStyle={{ background: 'pink', color: '#fff' }}
                    icon={<FaCss3Alt />}
            >
                    <h3 className="vertical-timeline-element-title">Student</h3>
                    <h4 className="vertical-timeline-element-subtitle">UNKLAB, Indonesia</h4>
                    <p>
                        Object Oriented Programming: CSS
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2024 - Present"
                    iconStyle={{ background: 'pink', color: '#fff' }}
                    icon={<IoLogoJavascript />}
            >
                    <h3 className="vertical-timeline-element-title">Student</h3>
                    <h4 className="vertical-timeline-element-subtitle">UNKLAB, Indonesia</h4>
                    <p>
                        Front End: Javascript
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        <Footer/>
        <ScrollToTop/>
    </>
  )
}

export default Experience