"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
    {
      title: "Interactive Music Lessons",
      description:
        "Learn to play your favorite instrument with personalized, real-time lessons. Our interactive platform connects students with professional musicians, offering a dynamic and engaging learning experience. Whether you're a beginner or advanced, you'll grow your skills with every session.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Interactive Music Lessons
            </div>
          ),
    },
    {
      title: "Live Practice Feedback",
      description:
        "Get instant feedback as you practice. With our real-time feedback system, you'll see improvements immediately. No more waiting for the next class—get corrections and tips in the moment, helping you perfect your technique and performance faster.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))] flex items-center justify-center text-white">
              Live Practise Feedback
            </div>
          ),
    },
    {
      title: "Collaborative Music Projects",
      description:
        "Work with fellow students on exciting group music projects. Whether it's composing, performing, or producing, our platform allows for seamless collaboration in real time. Share ideas, work together, and create something amazing as a team.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
              Collaborative Music Projects
            </div>
          ),
    },
    {
      title: "Advanced Music Theory",
      description:
        "Dive deep into the world of music theory with our comprehensive lessons. From scales and harmony to rhythm and composition, you'll gain a strong theoretical foundation that enhances your playing and musical understanding.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
              Advanced Music Theory
            </div>
          ),
    },
    {
        title: "Personalized Learning Paths",
        description:
          "Tailor your music education with customized learning paths based on your goals and skill level. Whether you want to master an instrument, compose original music, or learn music production, our platform offers courses designed just for you. Progress at your own pace and stay motivated with clear milestones.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
            Personalized Learning Paths
          </div>
        ),
      },
      {
        title: "Masterclasses with Experts",
        description:
          "Take your skills to the next level by learning from industry professionals and renowned musicians. Our masterclasses offer exclusive insights into advanced techniques, performance tips, and industry secrets that will inspire you to excel in your musical journey.",
        content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))] flex items-center justify-center text-white">
            Masterclasses with Experts
          </div>
        ),
      },
      
  ];
  
  

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs
