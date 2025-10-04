import Image from "next/image";
import React from "react";
import mthome from "../../../public/mindtraqk-overview.webp";
import mtagent from "../../../public/mindtraqk-agent.webp";
import mtdash from "../../../public/mindtraqk-dashboard.webp";

import Link from "next/link";
const Mainproject1 = () => {
  return (
    <section
      className="relative pt-[40vh] sm:pt-[60vh] z-40"
      style={{ opacity: "1", transform: "none" }}>
      <div>
        <section className="space-y-6 sm:space-y-10">
          <div className="space-y-3 sm:space-y-4">
            <h6 className="text-base sm:text-xl font-medium text-[#f4e7d4]">
              AI Workforce Intelligence Platform (SaaS Application)
            </h6>
            <h1 className="font-bold text-4xl sm:text-6xl text-[#f4e7d4]">
              MindTraqk
            </h1>
          </div>
          <div className="relative w-full h-116 md:h-128 bg-grey-light dark:bg-pop-dark rounded-xl overflow-hidden">
            <Image alt="" src={mthome} />
          </div>
        </section>
        <section className="mt-20 sm:mt-40">
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Introduction</strong>
          </h3>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            MindTraqk is an AI-powered workforce intelligence platform that
            helps organizations cut workforce costs by up to 30% and boost
            productivity 5×. Acting as an AI Co-Pilot for managers and
            employees, MindTraqk automates repetitive work, redistributes tasks
            intelligently, and provides real-time insights into deep vs shallow
            work, burnout risks, and team performance.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Problem</strong>
          </h3>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            MindTraqk began as nothing more than a rough concept — an
            undeveloped idea without any technical direction, architecture, or
            execution plan. There was no product framework, infrastructure, or
            defined roadmap. My challenge was to take this abstract idea and
            transform it into a fully functional, production-ready AI workforce
            intelligence platform.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Solution</strong>
          </h3>

          <ul className="ml-10 py-5 list-disc space-y-5 text-[#f4e7d4]">
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Product Foundation & Architecture</strong>: Designed the
                complete system architecture from scratch, establishing the core
                infrastructure, database schema, and scalable microservice-based
                backend to support AI-driven workforce analytics.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>AI-Powered Intelligence Layer</strong>: Integrated
                Opensource Large Language Models (LLM) to analyze tasks, meetings, and
                communication data — identifying deep vs. shallow work patterns,
                burnout indicators, and productivity insights in real time.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Full-Stack Development</strong>: Led the development of
                both frontend and backend using React (Vite + Zustand + TanStack
                Query) and Node.js (Express + MongoDB + TypeScript), ensuring a
                seamless and responsive experience across dashboards.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Third-Party Integrations</strong>: Connected with key
                workplace platforms including Jira, Slack, Google Meet, and
                Gmail to unify cross-platform work data into actionable
                intelligence.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Team Leadership & Execution</strong>: Directed and
                mentored a team of engineers, managing sprints, code reviews,
                and feature delivery — driving the project from concept to live
                deployment within tight timelines.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Performance & Scalability</strong>: Implemented
                efficient caching, Docker-based deployment, and CI/CD pipelines
                for reliability, scalability, and low-latency data processing
                across large datasets.
              </p>
            </li>

            <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
              By building MindTraqk from the ground up — from idea validation to
              live deployment — I delivered a robust, AI-native workforce
              intelligence platform that automates task management, detects
              burnout, and provides leaders with data-driven insights to
              optimize team performance.
            </p>
          </ul>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            Technologies and tools used include: React, Vite, Tailwind, Zustand, TanStack Query, Node.js, Express, MongoDB, TypeScript, Docker, AWS, Redis, CI/CD,Opensouce LLM, and OpenAI.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Link</strong>
          </h3>
          <ul className="ml-10 py-5 list-disc space-y-5">
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
                <a
                  href="https://app.mindtraqk.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-brand dark:text-azure transition duration-500 text-base sm:text-xl font-medium mb-4 underline underline-offset-8 opacity-70 hover:opacity-100">
                  MindTraqk
                </a>
              </p>
            </li>
          </ul>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <div className="relative flex w-full h-auto my-4 sm:my-10 rounded-xl bg-grey-light dark:bg-pop-dark overflow-hidden">
            <Image alt="project" src={mtagent} />
          </div>
          <div className="relative flex w-full h-auto my-4 sm:my-10 rounded-xl bg-grey-light dark:bg-pop-dark overflow-hidden">
            <Image alt="project" src={mtdash} />
          </div>
        </section>
        <section>
          <h4 className="text-2xl sm:text-4xl mt-20">
            <Link
              href={"/projects"}
              className="text-[#f4e7d4] underline underline-offset-8 cursor-pointer sm:opacity-70 sm:hover:opacity-100 transition duration-500">
              Back to Archive
            </Link>
          </h4>
        </section>
      </div>
    </section>
  );
};

export default Mainproject1;
