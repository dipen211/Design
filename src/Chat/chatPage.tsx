import React from "react";
import "./chatPage.css";
import {
  IconAward,
  IconChevronRight,
  IconLayoutGrid,
  IconCalendarEvent,
  IconPill,
  IconMessage,
  IconSettings,
  IconFingerprint,
  IconUser,
  IconInfoCircle,
  IconFile,
  IconStethoscope,
  IconFlask,
  IconYinYang,
  IconHeadset,
} from "@tabler/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const ChatPage = () => (
  <>
    <section>
      <header>
        <div className="headIcon">
          <IconAward
            size={30}
            color="black"
            stroke={3}
            strokeLinejoin="miter"
            className="logoIcon"
          />
          <IconChevronRight
            size={30}
            color="black"
            stroke={3}
            strokeLinejoin="miter"
            className="logoIcon collapsButton"
          />
        </div>
        <ul>
          <li>
            <IconLayoutGrid
              size={30}
              color="#58A4F1"
              stroke={1.5}
              strokeLinejoin="miter"
              className="menuIcon active"
            />
          </li>
          <li>
            <IconCalendarEvent
              size={30}
              color="black"
              stroke={1.5}
              strokeLinejoin="miter"
              className="menuIcon"
            />
          </li>
          <li>
            <IconPill
              size={30}
              color="black"
              stroke={1.5}
              strokeLinejoin="miter"
              className="menuIcon"
            />
          </li>
          <li>
            <IconMessage
              size={30}
              color="black"
              stroke={1.5}
              strokeLinejoin="miter"
              className="menuIcon"
            />
          </li>
          <li>
            <IconFile
              size={30}
              color="black"
              stroke={1.5}
              strokeLinejoin="miter"
              className="menuIcon"
            />
          </li>
          <li>
            <IconSettings
              size={30}
              color="black"
              stroke={1.5}
              strokeLinejoin="miter"
              className="menuIcon"
            />
          </li>
          <li>
            <IconInfoCircle
              size={30}
              color="black"
              stroke={1.5}
              strokeLinejoin="miter"
              className="menuIcon"
            />
          </li>
          <li>
            <IconFingerprint
              size={30}
              color="black"
              stroke={1.5}
              strokeLinejoin="miter"
              className="menuIcon"
            />
          </li>
          <li>
            <IconUser
              size={30}
              color="black"
              stroke={1.5}
              strokeLinejoin="miter"
              className="menuIcon"
            />
          </li>
        </ul>
      </header>

      <nav>
        <div className="mainHead">
          <div className="mainName">
            <p className="name">Michelle</p>
          </div>
          <Swiper spaceBetween={50} slidesPerView={2} className="tabList">
            <SwiperSlide>
              <div className="tab1">
                <IconPill
                  size={36}
                  color="white"
                  stroke={1.5}
                  strokeLinejoin="miter"
                  className="tabIcon1"
                />
                <p>Medications</p>
                <hr className="hrLine" />
              </div>
              <div className="tab2">
                <IconStethoscope
                  size={36}
                  color="white"
                  stroke={1.5}
                  strokeLinejoin="miter"
                  className="tabIcon2"
                />
                <p>Procedures</p>
                <hr className="hrLine" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="tab3">
                <IconCalendarEvent
                  size={36}
                  color="white"
                  stroke={1.5}
                  strokeLinejoin="miter"
                  className="tabIcon3"
                />
                <p>Meetings</p>
                <hr className="hrLine" />
              </div>
              <div className="tab4">
                <IconFlask
                  size={36}
                  color="white"
                  stroke={1.5}
                  strokeLinejoin="miter"
                  className="tabIcon4"
                />
                <p>Lab Tests</p>
                <hr className="hrLine" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="content">
          <h2 className="contentHeading">Open tasks</h2>
          <div className="task1">
            <IconMessage
              size={36}
              color="white"
              stroke={1.5}
              strokeLinejoin="miter"
              className="taskIcon1"
            />
            <p className="taskText1">
              Welcome call with a CN <br />{" "}
              <span className="taskTime">4:00pm</span>
            </p>
          </div>
          <div className="task2">
            <IconYinYang
              size={36}
              color="white"
              stroke={1.5}
              strokeLinejoin="miter"
              className="taskIcon2"
            />
            <p className="taskText2">
              Screening & Habits Enrollment
              <br /> <span className="taskTime">4:00pm</span>
            </p>
          </div>
          <div className="task3">
            <IconCalendarEvent
              size={36}
              color="white"
              stroke={1.5}
              strokeLinejoin="miter"
              className="taskIcon3"
            />
            <p className="taskText3">
              Meeting with your CN <br />{" "}
              <span className="taskTime">9:00 am</span>
            </p>
          </div>
          <div className="task4">
            <IconCalendarEvent
              size={36}
              color="white"
              stroke={1.5}
              strokeLinejoin="miter"
              className="taskIcon4"
            />
            <p className="taskText4">
              Meeting with your CN <br />{" "}
              <span className="taskTime">9:00 am</span>
            </p>
          </div>
          <div className="task5">
            <IconMessage
              size={36}
              color="white"
              stroke={1.5}
              strokeLinejoin="miter"
              className="taskIcon5"
            />
            <p className="taskText5">
              Message from Dr. john <br />{" "}
              <span className="taskTime">4:00 pm</span>
            </p>
          </div>
          <div className="task6">
            <IconStethoscope
              size={36}
              color="white"
              stroke={1.5}
              strokeLinejoin="miter"
              className="taskIcon6"
            />
            <p className="taskText6">
              Procedure date change <br />{" "}
              <span className="taskTime">2:00 pm</span>
            </p>
          </div>
        </div>
      </nav>

      <article>
        <div className="headIcon">
          <IconMessage
            size={30}
            color="white"
            stroke={1.5}
            strokeLinejoin="miter"
            className="messageIcon"
          />
          <p className="chatHeading">Chat</p>
        </div>
        <hr />
        <div className="chat">
          <div className="systemMessage">
            <IconHeadset
              size={30}
              color="black"
              stroke={1.5}
              strokeLinejoin="miter"
              className="chatIcon"
            />
            <div className="message">
              <p className="messageTest">
                Hi, this is GILEAD. Thank you to be with us. how may i help
                you...
              </p>
              <p className="messageTime">4:10 pm</p>
            </div>
          </div>
          <div className="message2">
            <p className="messageTest">
              Hi, this is GILEAD. Thank you to be with us. how may i help you...
            </p>
            <p className="messageTime">4:10 pm</p>
          </div>
          <p className="customerName">Michelle</p>
          <div className="customerMessage">
            <p className="customerText">Thank you to be with us.</p>
            <p className="customerText">Thank you to be with us.</p>
          </div>
        </div>
      </article>
    </section>
  </>
);

export default ChatPage;
