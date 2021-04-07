import React from "react";
import './header.css';
import { IconAward, IconPill, IconCalendarEvent, IconLayoutGrid, IconApps, IconSettings, IconMessage, IconMenu2 } from '@tabler/icons';

const Header = () => (
    <>
        <div className="header">
            <div className="logo">
                <IconAward size={36} color="red" stroke={3} strokeLinejoin="miter" />
                <h2 className="logoText">GILEAD</h2>
            </div>
            <ul className="headerList">
                <li><IconLayoutGrid size={36} color="black" stroke={1.5} strokeLinejoin="miter" /><p>Overview</p></li>
                <li><IconCalendarEvent size={36} color="black" stroke={1.5} strokeLinejoin="miter" /><p>Medical journey</p></li>
                <li><IconPill size={36} color="black" stroke={1.5} strokeLinejoin="miter" /><p>My medications</p></li>
            </ul>
            <div className="headerLeft">
                <button className="headerButton"><IconApps size={36} color="white" stroke={1.5} strokeLinejoin="miter" className="buttonImg icon" /><p className="buttonText">Quick actions</p></button>
                <IconSettings size={36} color="black" stroke={1.5} strokeLinejoin="miter" className="leftIcon" />
                <IconMessage size={36} color="black" stroke={1.5} strokeLinejoin="miter" className="leftIcon" />
            </div>
            <IconMenu2 size={36} color="black" stroke={1.5} strokeLinejoin="miter" />
        </div>
    </>
);

export default Header;