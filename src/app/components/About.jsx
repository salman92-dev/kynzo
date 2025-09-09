"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      className="relative bg-black text-white px-6 md:px-12 max-sm:pb-36 pt-0 max-md:mt-[-23rem] md:pt-70 flex flex-col-reverse md:flex-row items-center overflow-hidden about-bg"
    >
      {/* Left Side */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: -60 },
          show: {
            opacity: 1,
            x: 0,
            transition: { staggerChildren: 0.25, duration: 0.8 },
          },
        }}
        className="flex flex-col gap-6 w-full md:w-[40%] max-sm:px-6"
      >
        {/* Token Info */}
        {[
          {
            text: "KYNZO TOKEN",
            sub: "Name",
            rotate: "rotate-[6.93deg]",
            color: "bg-white text-[#0088C8]",
            subColor: "text-black",
          },
          {
            text: "Kynzo",
            sub: "Symbol",
            rotate: "rotate-[-4.38deg]",
            color: "relative z-5 bg-white/1 text-white border-5 border-[#19A7F3] inner-shadow",
            subColor: "text-white/70",
          },
          {
            text: "1 Billion",
            sub: "Total Supply",
            rotate: "rotate-[-12.18deg]",
            color: "bg-white text-[#0088C8]",
            subColor: "text-black",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40, rotate: -5 },
              show: { opacity: 1, y: 0, rotate: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`${item.color} text-6xl md:text-7xl text-center ${item.rotate} px-6 py-10 md:py-8 noodle rounded-3xl shadow-md`}
          >
            {item.text}
            <span
              className={`block text-2xl text-center font-normal ${item.subColor} urbanist-m mt-3`}
            >
              {item.sub}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Middle Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        animate={{ y: [0, -15, 0] }}
        className="relative z-6 md:left-[-4rem] flex justify-center w-full md:w-[60%] my-8 md:my-0"
      >
        <img
          src="/wolf.png"
          alt="Wolf Mascot"
          className="hidden md:block w-[100%] h-auto drop-shadow-2xl"
        />
      </motion.div>

      {/* Right Side - Text */}
      <div className="w-full md:w-[40%] md:text-center md:text-left md:ml-[-5rem]">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[47vw] md:text-[10.188rem] noodle !leading-[70%]"
        >
          ABOUT
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="block md:hidden text-[24vw] md:text-[10.188rem] noodle !leading-[100%]"
        >
          THE PROJECT
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden md:block flex items-center gap-2 text-9xl md:text-[10.188rem] noodle !leading-[100%] md:ml-[-1rem]"
        >
          THE
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block text-white text-sm md:text-base urbanist-m !leading-[140%] md:!leading-[120%]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </motion.p>
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="hidden md:block text-[35vw] md:text-[10.188rem] noodle md:ml-[-2rem] !leading-[70%]"
        >
          PROJECT
        </motion.h2>
        <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block md:hidden text-white text-sm md:text-base urbanist-m !leading-[140%] md:!leading-[120%]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="md:text-right mt-12"
        >
          <button>
            <Image
              src="/tg-btn.png"
              alt="br=btn"
              width={476}
              height={132}
              className="w-60 md:w-70"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
