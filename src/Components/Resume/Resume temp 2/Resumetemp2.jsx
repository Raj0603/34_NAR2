/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import "./Resumetemp2.css"
import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
    AtSign,
    Calendar,
    GitHub,
    Linkedin,
    MapPin,
    Paperclip,
    Phone,
} from "react-feather";

const Resumetemp2 = forwardRef((props, ref) => {

    const information = props.information;
    const sections = props.sections;
    const containerRef = useRef();

    // const [columns, setColumns] = useState([[], []]);
    // const [source, setSource] = useState("");
    // const [target, seTarget] = useState("");

    const info = {
        workExp: information[sections.workExp],
        project: information[sections.project],
        skills: information[sections.skills],
        education: information[sections.education],
        basicInfo: information[sections.basicInfo],
        summary: information[sections.summary],
        other: information[sections.other],
    };

    const getFormattedDate = (value) => {
        if (!value) return "";
        const date = new Date(value);

        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!props.activeColor || !container) return;

        container.style.setProperty("--color", props.activeColor);
    }, [props.activeColor]);

    return (
        <div className="resume">
            <div className="resume_left">
                <div className="resume_content">
                    <div className="resume_item resume_info">
                        <div className="title">
                            <p className="bold">{info.basicInfo?.detail?.name}</p>
                            <p className="regular">{info.basicInfo?.detail?.title}</p>
                        </div>
                        <ul>
                            <li>
                                {/* <div className="icon">
                                    <i className="fas fa-map-signs"></i>
                                </div> */}
                                <div className="data">
                                    {info.basicInfo?.detail?.email ? (
                                        <a> <AtSign /> {info.basicInfo?.detail?.email} </a>
                                    ) : (
                                        <span />
                                    )}
                                </div>
                            </li>
                            <li>
                                {/* <div className="icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div> */}
                                <div className="data">
                                    {info.basicInfo?.detail?.phone ? (
                                        <a >
                                            <Phone /> {info.basicInfo?.detail?.phone}
                                        </a>
                                    ) : (
                                        <span />
                                    )}
                                </div>
                            </li>
                            <li>
                                {/* <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                </div> */}
                                <div className="data">
                                    {info.basicInfo?.detail?.linkedin ? (
                                        <a >
                                            <Linkedin /> {info.basicInfo?.detail?.linkedin}
                                        </a>
                                    ) : (
                                        <span />
                                    )}
                                </div>
                            </li>
                            <li>
                                {/* <div className="icon">
                                    <i className="fab fa-weebly"></i>
                                </div> */}
                                <div className="data">
                                    {info.basicInfo?.detail?.github ? (
                                        <a >
                                            <GitHub /> {info.basicInfo?.detail?.github}
                                        </a>
                                    ) : (
                                        <span />
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="resume_item resume_skills">
                        <div className="title">
                            <p className="bold">Skills</p>
                        </div>
                        <ul>
                            <li>
                                <div className="skill_name">
                                    {info.skills.points[0]}
                                </div>
                                <div className="skill_progress">
                                    <span style={{ width: "80%" }}></span>
                                </div>
                                <div className="skill_per">80%</div>
                            </li>
                            <li>
                                <div className="skill_name">
                                    {info.skills.points[1]}
                                </div>
                                <div className="skill_progress">
                                    <span style={{ width: "74%" }}></span>
                                </div>
                                <div className="skill_per">74%</div>
                            </li>
                            <li>
                                <div className="skill_name">
                                    {info.skills.points[2]}
                                </div>
                                <div className="skill_progress">
                                    <span style={{ width: "68%" }}></span>
                                </div>
                                <div className="skill_per">68%</div>
                            </li>
                            <li>
                                <div className="skill_name">
                                    {info.skills.points[3]}
                                </div>
                                <div className="skill_progress">
                                    <span style={{ width: "60%" }}></span>
                                </div>
                                <div className="skill_per">60%</div>
                            </li>
                            <li>
                                <div className="skill_name">
                                    {info.skills.points[4]}
                                </div>
                                <div className="skill_progress">
                                    <span style={{ width: "55%" }}></span>
                                </div>
                                <div className="skill_per">55%</div>
                            </li>
                        </ul>
                    </div>
                    <div className="resume_item resume_social">
                        <div className="title">
                            <p className="bold">Projects</p>
                        </div>
                        {/* <div className="sectionTitle">{info.project.sectionTitle}</div> */}
                        <div className="content">
                            {info.project?.details?.map((item) => (
                                <div >
                                    {item.title ? (
                                        <p className="title">{item.title}</p>
                                    ) : (
                                        <span />
                                    )}
                                    {item.link ? (
                                        <a className="link" href={item.link}>
                                            <Paperclip />
                                            {item.link}
                                        </a>
                                    ) : (
                                        <span />
                                    )}
                                    {item.github ? (
                                        <a className="link" href={item.github}>
                                            <GitHub />
                                            {item.github}
                                        </a>
                                    ) : (
                                        <span />
                                    )}
                                    {item.overview ? (
                                        <p >{item.overview} </p>
                                    ) : (
                                        <span />
                                    )}
                                    {item.points?.length > 0 ? (
                                        <ul className="points">
                                            {item.points?.map((elem, index) => (
                                                <li className="point" key={elem + index}>
                                                    {elem}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <span />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="resume_right">

                <div className="resume_item resume_work">
                    <div className="title">
                        <p className="bold">Work Experience</p>
                    </div>
                    <ul>
                        <li>
                            {info.workExp?.details?.map((item) => (
                                <div  key={item.title}>
                                    {item.title ? (
                                        <p >{item.title}</p>
                                    ) : (
                                        <span />
                                    )}
                                    {item.companyName ? (
                                        <p >{item.companyName}</p>
                                    ) : (
                                        <span />
                                    )}
                                    {item.certificationLink ? (
                                        <a  href={item.certificationLink}>
                                            <Paperclip />
                                            {item.certificationLink}
                                        </a>
                                    ) : (
                                        <span />
                                    )}
                                    {item.startDate && item.endDate ? (
                                        <div >
                                            <Calendar /> {getFormattedDate(item.startDate)}-
                                            {getFormattedDate(item.endDate)}
                                        </div>
                                    ) : (
                                        <div />
                                    )}
                                    {item.location ? (
                                        <p >
                                            <MapPin /> Remote
                                        </p>
                                    ) : (
                                        <span />
                                    )}
                                    {item.points?.length > 0 ? (
                                        <ul >
                                            {item.points?.map((elem, index) => (
                                                <li  key={elem + index}>
                                                    {elem}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <span />
                                    )}
                                </div>
                            ))}
                        </li>

                        {/* <li>
                            <div className="date">2015 - 2017</div>
                            <div className="info">
                                <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                            </div>
                        </li>
                        <li>
                            <div className="date">2017 - Present</div>
                            <div className="info">
                                <p className="semi-bold">Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                            </div>
                        </li> */}
                    </ul>
                </div>
                <div className="resume_item resume_education">
                    <div className="title">
                        <p className="bold">Education</p>
                    </div>
                    <ul>
                        <li>
                        {info.education?.details?.map((item) => (
            <div >
              {item.title ? (
                <p >{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p >{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div >
                  <Calendar /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
                        </li>
                        {/* <li>
                            <div className="date">2000 - 2010</div>
                            <div className="info">
                                <p className="semi-bold">Texas International School</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                            </div>
                        </li> */}
                    </ul>
                </div>
                <div className="resume_item resume_about">
                    <div className="title">
                        <p className="bold">Summary</p>
                    </div>
                    <p>{info.summary?.detail}</p>
                </div>
                <div className="resume_item resume_hobby">
                    <div className="title">
                        <p className="bold">Others</p>
                    </div>
                    <p>{info?.other?.detail}</p>

                </div>
            </div>
        </div >
    )
});
export default Resumetemp2