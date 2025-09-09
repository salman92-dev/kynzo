"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Roadmap() {
  const phases = [
    {
      title: "PHASE 01 : Launch",
      points: [
        "Token creation and smart contract deployment.",
        "Website and whitepaper release.",
        "Initial marketing campaign",
      ],
    },
    {
      title: "PHASE 02 : Growth",
      points: [
        "Build a strong social media presence.",
        "Partner with influencers and other crypto projects",
        "Add new milestones.",
      ],
    },
    {
      title: "PHASE 03 : Expansion",
      points: [
        "Introduce play-to-earn games.",
        "Expand partnerships and collaborations",
        "Develop DAO for community governance.",
      ],
    },
    {
      title: "PHASE 04 : Legacy",
      points: [
        "Establish Kynzo Token as a mainstream cryptocurrency",
        "Explore cross-chain compatibility",
        "Launch branded merchandise store.",
      ],
    },
     {
      title: "PHASE 05 : Post-Presale Actions",
      points: [
        "Marketing efforts.",
        "DEX updates.",
        "Trends",
        "CoinMarketCap/Coingecko listings",
        "CEX listing updates."
      ],
    },
  ];

  return (
    <section className="bg-[#131311] text-white md:py-16 flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden" id="roadmap">
        <Image src="/gradient.png" alt="gradient" width={884} height={1071} className="absolute bottom-0 right-0"/>
        <Image src="/s-1.png" alt="s-1" width={684} height={416} className="hidden md:block absolute w-[25%] top-[-2rem] right-0"/>
        <div className="w-full md:w-[28%] left-0 relative md:absolute max-sm:mb-[-5%]">
            <Image  src="/wolf-4.png" alt="wolf" width={802} height={1454}/>
        </div>
      <div className="w-full md:pl-[25%]">
        <motion.h2 className="text-[31vw] md:text-[12vw] md:text-7xl noodle text-center md:text-left"
         initial={{ opacity: 0, y: 20 ,filter : "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0,filter : "blur(0px)" }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
            ROADMAP
        </motion.h2>
        <div className="mt-12 relative overflow-x-hidden max-sm:px-6">
            <Swiper
            modules={[Navigation]}
            navigation={{
            prevEl: ".roadmap-prev",
            nextEl: ".roadmap-next",
          }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="pb-12 md:w-[110%]"
            >
            {phases.map((phase, idx) => (
                <SwiperSlide key={idx}>
                <div className="roadmap-card text-black p-6 px-12 rounded-3xl shadow-lg md:min-w-[30%] min-h-[330px]">
                    <h3 className="text-6xl noodle mb-4 text-black">{phase.title}</h3>
                    <ul className="list-disc list-outside text-lg urbanist-m text-black space-y-2">
                    {phase.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                    </ul>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>

           
        </div>
         {/* Navigation Arrows */}
            {/* 🚀 Custom Navigation Buttons */}
        <div className="relative z-5 flex max-sm:justify-center gap-6 mt-6">
          <button className="roadmap-prev rounded-full px-4 py-2 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed hover:text-black transition">
            <Image src="/right-arrow.svg" alt="arrrow" width={100} height={10} className="w-20"/>
          </button>
          <button className="roadmap-next rounded-full px-4 py-2 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed hover:text-black transition">
            <Image src="/left-arrow.svg" alt="arrrow" width={100} height={10} className="w-20"/>
          </button>
        </div>
      </div>
    </section>
  );
}
