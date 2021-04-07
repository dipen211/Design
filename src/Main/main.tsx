import React from "react";
import './main.css';
import { IconCalendarEvent, IconStethoscope, IconPill, IconFlask, IconList, IconMessage } from '@tabler/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

const Main = () => (
    <>
        <div className="main">
            <div className="mainHead">
                <div className="mainName">
                    <h1>Hello</h1>
                    <p className="name">Michelle</p>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    className="tabList"
                >
                    <SwiperSlide>
                        <div className="tab1">
                            <IconPill size={36} color="white" stroke={1.5} strokeLinejoin="miter" className="tabIcon1" />
                            <p>Medications</p>
                            <hr className="hrLine" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tab2">
                            <IconStethoscope size={36} color="white" stroke={1.5} strokeLinejoin="miter" className="tabIcon2" />
                            <p>Procedures</p>
                            <hr className="hrLine" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tab3">
                            <IconCalendarEvent size={36} color="white" stroke={1.5} strokeLinejoin="miter" className="tabIcon3" />
                            <p>Meetings</p>
                            <hr className="hrLine" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tab4">
                            <IconFlask size={36} color="white" stroke={1.5} strokeLinejoin="miter" className="tabIcon4" />
                            <p>Lab Tests</p>
                            <hr className="hrLine" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="mainNotification">
                <IconList size={36} color="black" stroke={1.5} strokeLinejoin="miter" className="taskIcon" /><p>You have<b> 5 open tasks</b></p>
                <IconMessage size={36} color="black" stroke={1.5} strokeLinejoin="miter" className="messageIcon" /><p>You have<b> 2 messages</b></p>
            </div>
        </div>
    </>
);

export default Main;