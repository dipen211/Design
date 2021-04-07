import React from "react";
import './content.css';
import { IconCalendarEvent, IconStethoscope, IconMessage, IconYinYang } from '@tabler/icons';

const Content = () => (
    <>
        <div className="content">
            <h2 className="contentHeading">Open tasks</h2>
            <div className="task1">
                <IconMessage size={36} color="white" stroke={1.5} strokeLinejoin="miter" className="taskIcon1" /><p className="taskText1">Welcome call with a CN <br /> <span className="taskTime">4:00pm</span></p>
            </div>
            <div className="task2">
                <IconYinYang size={36} color="white" stroke={1.5} strokeLinejoin="miter" className="taskIcon2" /><p className="taskText2">Screening & Habits Enrollment<br /> <span className="taskTime">4:00pm</span></p>
            </div>
            <div className="task3">
                <IconCalendarEvent size={36} color="white" stroke={1.5} strokeLinejoin="miter" className="taskIcon3" /><p className="taskText3">Meeting with your CN <br /> <span className="taskTime">9:00 am</span></p>
            </div>
            <div className="task4">
                <IconCalendarEvent size={36} color="white" stroke={1.5} strokeLinejoin="miter" className="taskIcon4" /><p className="taskText4">Meeting with your CN <br /> <span className="taskTime">9:00 am</span></p>
            </div>
            <div className="task5">
                <IconMessage size={36} color="white" stroke={1.5} strokeLinejoin="miter" className="taskIcon5" /><p className="taskText5">Message from Dr. john <br /> <span className="taskTime">4:00 pm</span></p>
            </div>
            <div className="task6">
                <IconStethoscope size={36} color="white" stroke={1.5} strokeLinejoin="miter" className="taskIcon6" /><p className="taskText6">Procedure date change <br /> <span className="taskTime">2:00 pm</span></p>
            </div>
        </div>
    </>
);

export default Content;