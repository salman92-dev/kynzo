"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const raccoonImage = "/raccon.png";

// Digit with animation
const Digit = ({ digit }) => (
  <AnimatePresence mode="popLayout">
    <motion.div
      key={digit}
      initial={{ opacity: 0, y: -20, rotateX: 90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: 20, rotateX: -90 }}
      transition={{ duration: 0.4 }}
      className="bg-white text-[#290070] patrick text-4xl w-8 h-16 flex items-center justify-center rounded-md shadow"
    >
      {digit}
    </motion.div>
  </AnimatePresence>
);

// Utility to split string into animated digit groups
const DigitGroup = ({ value, label }) => (
  <div className="flex flex-col md:flex-row md:items-end gap-1 mx-2">
    <div className="flex space-x-1">
      {value.split("").map((digit, index) => (
        <Digit key={index} digit={digit} />
      ))}
    </div>
    <div className="text-white noodle text-2xl mt-1 uppercase tracking-wider">
      {label}
    </div>
  </div>
);

const CountdownTimer = () => {
  const targetDate = new Date("2025-09-17T18:30:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
      2,
      "0"
    );
    const hours = String(
      Math.floor((difference / (1000 * 60 * 60)) % 24)
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((difference / 1000 / 60) % 60)
    ).padStart(2, "0");
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
      2,
      "0"
    );

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[#0096DC] py-6 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center max-sm:py-16 gap-6 justify-center bg-[#13B4FF]">
        {/* Left Raccoon */}
        <motion.img
          src={raccoonImage}
          alt="Raccoon"
          className="w-50 h-50"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />

        {/* Timer Digits */}
        <div className="flex space-x-4">
          <DigitGroup value={timeLeft.days} label="Days" />
          <DigitGroup value={timeLeft.hours} label="Hours" />
          <DigitGroup value={timeLeft.minutes} label="Minutes" />
          <DigitGroup value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Right Raccoon */}
        <motion.img
          src={raccoonImage}
          alt="Raccoon"
          className="hidden md:block w-50 h-50 -scale-x-100"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: 2 }}
        />
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
