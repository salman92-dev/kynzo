"use client";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero_section = () => {
  return (
    <section className="relative bg-[#131311] px-6">
      {/* Gradients */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/s-2.png"
          alt="s2"
          width={539}
          height={819}
          className="hidden md:block absolute w-[18%] left-4 md:left-16 top-2 md:top-0"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      >
        <Image
          src="/gradient-2.png"
          alt="gradient"
          width={793}
          height={990}
          className="absolute -left-6"
        />
      </motion.div>

        <Image
          src="/gradient-3.png"
          alt="gradient"
          width={793}
          height={990}
          className="absolute bottom-0 right-0"
        />

      <Navbar />

      {/* Hero Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-left md:text-center noodle !leading-[80%] text-[40vw] mt-4 md:text-[45vw]"
      >
        KYNZO
      </motion.h1>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-end justify-between md:px-36">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-[25%]"
        >
          <h5 className="text-[#09EEFE] urbanist-m text-4xl">
            Kynzo is a cutting-edge
          </h5>
          <h5 className="text-white text-4xl">crypto digital asset,</h5>
          <p className="text-white/70 text-sm mt-2 urbanist-m">
            Lorem ipsum dolor sit amet,adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 md:mt-16"
          >
            <Image
              src="/whitepaper-btn.png"
              alt="btn"
              width={534}
              height={149}
              className="w-40 md:w-full"
            />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-[20%] mt-6 md:relative bottom-[-4rem]"
        >
          <p className="text-white/70 md:text-right text-sm mt-2 urbanist-m">
            Lorem ipsum dolor sit amet,adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </motion.div>
      </div>

      {/* Wolf & Side Image */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <Image
          src="/hero-wolf.png"
          alt="s2"
          width={1614}
          height={2024}
          className="select-none relative md:absolute w-full md:w-[58%] left-0 md:left-[24%] bottom-0 md:bottom-[-21rem] z-5"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      >
        <Image
          src="/hero-2.png"
          alt="s2"
          width={1614}
          height={2024}
          className="select-none relative hidden md:block md:absolute w-full md:w-[28%] right-0 md:right-[4%] bottom-0 md:bottom-[5rem] z-4"
        />
      </motion.div>

      {/* Social Icons with stagger */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="hidden md:block"
      >
        {[
          { src: "/x.png", pos: "md:absolute right-24 top-24" },
          { src: "/insta.png", pos: "md:absolute left-28 top-150" },
          { src: "/tg.png", pos: "md:absolute right-12 bottom-10 z-6" },
          { src: "/lorem.png", pos: "md:absolute left-113 top-70 z-6" },
          { src: "/lorem.png", pos: "md:absolute left-105 top-150 z-6" },
        ].map((icon, i) => (
          <motion.a
            key={i}
            href=""
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              show: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.6 }}
            className={`${icon.pos} w-22`}
          >
            <Image src={icon.src} alt="social" width={296} height={266} />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};
export default Hero_section;
