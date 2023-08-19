"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Information Technology</span>, I decided
        to follow my passion for programming. I enrolled in a Bangkit and gained
        expertise in{" "}
        <span className="font-medium">cloud and web development</span>.{" "}
        <span className="italic">The problem-solving aspects</span> is my
        favorite part of programming, as I{" "}
        <span className="underline">enjoy</span> the atisfaction of finding
        solutions. My core stack includes{" "}
        <span className="font-medium">Vanilla, WordPress, Next.js</span>, and
        I'm also acquainted with cloud computing and UI/UX design. I'm
        constantly seeking opportunities to learn new technologies. Currently, I
        am currently member of <span className="font-medium">Breef Studio</span>{" "}
        serving as a web developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I find enjoyment in
        playing the electric guitar and exploring jazz music. I have a keen
        interest in learning more about{" "}
        <span className="font-medium">nature</span>. At present, my focus is on
        studying to become a{" "}
        <span className="font-medium">
          full stack developer and a DevOps engineer.
        </span>
      </p>
    </motion.section>
  );
}
