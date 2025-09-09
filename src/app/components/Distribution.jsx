"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Distribution() {
  const data = [
    { label: "Presale", value: 88, color: "bg-blue-700" },
    { label: "Liquidity", value: 45, color: "bg-blue-500" },
    { label: "Cex Listings", value: 33, color: "bg-blue-600" },
    { label: "Marketing", value: 25, color: "bg-blue-400" },
    { label: "Airdrop", value: 30, color: "bg-blue-300" },
    { label: "Staking", value: 28, color: "bg-blue-200" },
    { label: "Revenue Streams", value: 23, color: "bg-blue-100" },
  ];

  return (
    <section className="bg-white px-6 md:px-12 py-16 clip mt-[-4rem] relative" id="distribution">
        <motion.img src="/wolf-2.png" alt="wolf" width={1276} height={1914} className="hidden md:block absolute left-[30%] md:left-[30%] top-70 md:bottom-[-4rem] w-[70%] md:w-[45%] z-2" 
        initial={{ y: 0 }}
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        <motion.img src="/wolf-3.png" alt="wolf" width={1276} height={1914} className="absolute left-[40%] md:left-[15%] top-77 md:bottom-0 w-[60%] md:w-[20%]" 
        animate={{ filter: ["blur(0px)","blur(2px)"], opacity : [0,1,1,0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      <motion.h2 className="relative z-1 text-[24vw] md:text-[26vw]  !leading-[85%] noodle gradient-1 text-transparent bg-clip-text tracking-tight text-center md:text-left"
          initial={{ opacity: 0, y: 20 ,filter : "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0,filter : "blur(0px)" }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.6 }}
      >
        DISTRIBUTION
      </motion.h2>

      <div className="mt-12 flex flex-col md:flex-row gap-12">
        {/* Left Bars */}
        <div className="space-y-6 w-full md:w-[80%]">
          {data.map((item, idx) => (
            <div key={idx} className="w-full">
              <div className="h-10 overflow-hidden relative">
                <motion.div
                  className={`relative h-full flex items-center rounded-r-[12px] ${item.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                <span className="absolute right-0 text-base md:text-2xl font-bold text-white rounded-[5px] shadow-2 h-full px-2 md:px-4 flex items-center noodle bg-white/1 ">
                  {item.value}%
                </span>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Legend */}
        <div className="flex flex-wrap justify-start gap-3 space-y-7 w-full md:w-[20%]">
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <span
                className={`w-6 h-6 rounded-full ${item.color} inline-block`}
              />
              <span className="text-black/70 text-xl md:text-3xl urbanist-m ">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
