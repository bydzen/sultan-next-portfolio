import React from "react";
import { LuBriefcase, LuBuilding, LuGraduationCap } from "react-icons/lu";
import rayatigaImg from "@/public/rayatiga.png";
import pawonkos799Img from "@/public/pawonkos799.png";
import makglengcoffeeImg from "@/public/makglengcoffee.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Rayatiga",
    location: "Magelang, ID",
    description:
      "I am establishing an SME business called Rayatiga, which operates in the field of information technology, with a particular specialization in web development.",
    icon: React.createElement(LuBriefcase),
    date: "2019 - present",
  },
  {
    title: "Telkom University",
    location: "Bandung, ID",
    description:
      "I graduated after 3.5 years of studying IT and immediately found a job as a web developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "PT. Breef Digital Indonesia",
    location: "Yogyakarta, ID",
    description:
      "I have been working as a web developer up to the present. I have also upskilled to full stack development.",
    icon: React.createElement(LuBuilding),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Rayatiga",
    description:
      "I work in my own business, handling everything from server procurement to the client-facing interface.",
    tags: ["Business", "Cloud", "HTML", "CSS", "JavaScript", "Go"],
    imageUrl: rayatigaImg,
  },
  {
    title: "Pawonkos799",
    description:
      "Business and e-commerce website for UMK Pawonkos799 built with CMS WordPress with LAMP Stack. Also registred by DJKI.",
    tags: ["Cloud", "UI/UX", "LAMP", "WordPress", "Bootstrap"],
    imageUrl: pawonkos799Img,
  },
  {
    title: "Makgleng Coffee",
    description:
      "Business and e-commerce website for UMK Makgleng Coffee Indonesia built with CMS WordPress with LAMP Stack.",
    tags: ["Cloud", "UI/UX", "LAMP", "WordPress", "PHP"],
    imageUrl: makglengcoffeeImg,
  },
] as const;

export const skillsData = [
  "Business Development",
  "Google Cloud",
  "Amazon Cloud",
  "JavaScript",
  "Typescript",
  "WordPress",
  "Next.js",
  "Drupal",
  "Moodle",
  "jQuery",
  "HUGO",
  "HTML",
  "CSS",
  "PHP",
  "SQL",
  "GO",
  "C",
] as const;
