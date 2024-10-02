'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const musicSchoolTestimonials = [
    {
      quote: "The personalized lessons have been a game changer for my progress. I’ve learned more in a few months than I did in years of traditional classes!",
      name: "Emily Davis",
      title: "Piano Student",
    },
    {
      quote: "The collaborative projects have pushed me out of my comfort zone and helped me grow as a musician. I love working with other students!",
      name: "Mark Thompson",
      title: "Guitarist & Composer",
    },
    {
      quote: "Getting real-time feedback during practice sessions is incredible. I can instantly correct mistakes and improve on the spot.",
      name: "Sophia Lee",
      title: "Violin Student",
    },
    {
      quote: "The masterclasses are top-notch. Learning from industry experts has given me insights I never would have had otherwise.",
      name: "Carlos Hernandez",
      title: "Music Producer",
    },
    {
      quote: "The platform is so easy to use, and the courses are really well-structured. I’ve improved my skills while having so much fun!",
      name: "Anna Roberts",
      title: "Drummer",
    },
    {
      quote: "From theory to practice, the comprehensive curriculum covers everything I need. I feel more confident every time I play!",
      name: "Michael Johnson",
      title: "Saxophonist",
    },
    {
        quote: "The flexible learning paths allowed me to tailor my lessons to fit my busy schedule. It’s the perfect balance between work and music!",
        name: "Jessica Miller",
        title: "Vocalist",
      },
      {
        quote: "The interactive lessons are so engaging! I’ve gone from knowing nothing about music theory to being able to compose my own pieces.",
        name: "Ryan Kim",
        title: "Music Theory Student",
      },
      {
        quote: "I never thought I’d be able to collaborate with other musicians from around the world. This platform has truly opened new doors for me.",
        name: "Natalie Peterson",
        title: "Cellist",
      },
      {
        quote: "The support from instructors and fellow students is amazing. I’ve never felt more motivated to pursue my passion for music.",
        name: "James Anderson",
        title: "Bassist",
      },
  ];
  

function MusicSchoolTestimonals() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony:Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl"><InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="right"
        speed="slow"
      /></div>
      </div>
    </div>
  )
}

export default MusicSchoolTestimonals
