import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import Navbar from "../components/Navbar";
import { experiences, skills } from "../constants";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
const About = () => {
  const angle = (Math.random() - 0.5) * 6;
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <Navbar />
      <div className="mt-15">
        <h1 className="text-4xl font-bold text-gray-900">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Nathan
          </span>
        </h1>
        <div className="mt-4 text-lg text-slate-600">
          <p>
            Software Engineer based in Germany, specializing in technical
            education through hands-on learning and building applications.
          </p>
        </div>
        <div className="pt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            My Skills
          </h3>
          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill, index) => (
              <div className="block-container w-20 h-20" key={skill.name}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Work Experience
          </h3>
          <div className="mt-4 text-lg text-slate-600">
            <p>
              I've worked with all sorts of companies, leveling up my skills and
              teaming up with smart people. Here's the rundown:
            </p>
          </div>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div key={index}>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
      <Footer />
    </section>
  );
};

export default About;
