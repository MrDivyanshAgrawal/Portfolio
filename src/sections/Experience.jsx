import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiAward, FiTrendingUp, FiMapPin, FiCheck } from 'react-icons/fi';
import { useRef } from 'react';

const timelineDotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      duration: 0.5
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const ExperienceItem = ({ exp }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.3 });

  return (
    <motion.div ref={itemRef} className="relative flex w-full flex-col items-center">
      <motion.div
        variants={timelineDotVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mb-6 bg-gray-900 p-3 rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-400/20"
      >
        <FiBriefcase className="text-cyan-400 text-xl" />
      </motion.div>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover={{ scale: 1.02 }}
        className="relative w-full max-w-3xl bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 lg:p-8
                border border-gray-700 hover:border-cyan-400/50
                transition-all duration-300 group text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-xl"
        />

        <motion.div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
            <p className="text-cyan-400 font-medium text-lg mb-1">{exp.role}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <FiCalendar />
                <span>{exp.date}</span>
              </div>
              {exp.location && (
                <div className="flex items-center gap-2">
                  <FiMapPin />
                  <span>{exp.location}</span>
                </div>
              )}
            </div>
          </motion.div>

          {exp.achievements && (
            <motion.div className="flex flex-wrap justify-center gap-3 mt-4">
              {exp.achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ?
                    { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 + i * 0.1 } } :
                    { opacity: 0, y: 20 }
                  }
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-cyan-400/10
                         rounded-full border border-cyan-400/30"
                >
                  <span className="text-cyan-400">{achievement.icon}</span>
                  <span className="text-sm text-cyan-300">{achievement.text}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {exp.summary && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-6 text-gray-300 leading-relaxed text-left"
            >
              {exp.summary}
            </motion.p>
          )}

          <div className="mt-6 text-left">
            <h4 className="text-white text-xs font-semibold mb-2 flex items-center gap-1 justify-center sm:justify-start">
              <FiAward className="text-cyan-400" />
              Key Achievements
            </h4>
            <ul className="space-y-3 list-none">
            {exp.description.map((desc, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ?
                  { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 + i * 0.1 } } :
                  { opacity: 0, y: 20 }
                }
                className="flex gap-3 text-gray-300 leading-relaxed text-sm bg-gray-800/30 p-2 rounded-md border border-gray-700/50"
              >
                <FiCheck className="text-cyan-400 mt-1 flex-shrink-0" />
                <span>{desc}</span>
              </motion.li>
            ))}
            </ul>
          </div>

          <motion.div className="mt-6 flex flex-wrap justify-center gap-2">
            {exp.skills.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ?
                  { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 + i * 0.1 } } :
                  { opacity: 0, y: 20 }
                }
                whileHover={{
                  scale: 1.05,
                  color: "rgb(34, 211, 238)",
                  borderColor: "rgba(34, 211, 238, 0.5)"
                }}
                className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm
                       border border-gray-600 hover:border-cyan-400/50 hover:text-cyan-400
                       transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const timelineRef = useRef(null);
  const messageRef = useRef(null);

  const isSectionInView = useInView(sectionRef, { amount: 0.1 });
  const isTitleInView = useInView(titleRef, { amount: 0.5 });
  const isTimelineInView = useInView(timelineRef, { amount: 0.3 });
  const isMessageInView = useInView(messageRef, { amount: 0.5 });

  const experiences = [
    {
      title: "YogLabs AI Research Foundation",
      role: "Software Development Engineer Intern · Remote",
      date: "Mar 2026 – Present",
      location: "Remote",
      summary: "Built and productionized an agentic extraction pipeline that turns research-lab websites into structured knowledge graphs inside a live microservices stack.",
      description: [
        "Built an agentic information extraction pipeline using Python, LangGraph, OpenAI APIs, and BeautifulSoup to convert 100+ research web pages into structured knowledge graphs.",
        "Developed schema-first extraction workflows with LLM-based classification, entity linking, and fallback-safe parsing across people, projects, and publications.",
        "Implemented internal-link web crawling, typed Pydantic schemas, and JSON-validated LLM outputs, improving extraction consistency across heterogeneous websites by 40%.",
        "Integrated the pipeline into a microservices architecture using Flask, MongoDB, Docker, and REST APIs with asynchronous worker-based processing.",
        "Architected idempotent MongoDB upserts and normalized deduplication logic, reducing duplicate entity generation during repeated crawls by 35%."
      ],
      skills: ["Python", "LangGraph", "OpenAI APIs", "Flask", "MongoDB", "Docker", "REST APIs"],
      achievements: [
        { icon: <FiTrendingUp />, text: "40% extraction consistency gain" },
        { icon: <FiTrendingUp />, text: "35% fewer duplicate entities" }
      ]
    },
    {
      title: "Xelron",
      role: "Software Development Engineer Intern · Remote",
      date: "Jul 2025 – Sept 2025",
      location: "Remote",
      summary: "Contributed to LLM evaluation workflows, prompt-engineering standards, and TerminalBench task corrections for production-grade AI training pipelines.",
      description: [
        "Authored Marlin V3 prompt preparation guides and evaluation runbooks defining multi-turn PR trajectory workflows, acceptance criteria, and submission standards.",
        "Designed LLM evaluation workflows with validation gates to compare model responses against edge cases and measurable deliverables before team review.",
        "Corrected TerminalBench task packages by fixing Docker environments, oracle solutions, test verifiers, and dependencies while preserving original task intent.",
        "Documented grammar, formatting, and cross-verification rules for high-quality training prompts, improving consistency across team submissions."
      ],
      skills: ["Prompt Engineering", "LLM Evaluation", "Technical Documentation", "Docker", "GitHub", "QA Workflows"],
      achievements: [
        { icon: <FiAward />, text: "Internship completed successfully" },
        { icon: <FiTrendingUp />, text: "Team workflow documentation" }
      ]
    },
    {
      title: "HacktheChain 2.0 – IIIT Kota",
      role: "Full-Stack Developer · Team Express Emergency Engineers",
      date: "Feb 2024",
      location: "IIIT Kota",
      summary: "Led development of an emergency response platform recognized among the Top 10 teams out of 40+ at a national hackathon.",
      description: [
        "Architected a crisis response platform with real-time geolocation tracking that reduced emergency response time by 25%.",
        "Built a mobile-first interface with responsive design patterns, achieving strong cross-device compatibility for field use.",
        "Developed backend infrastructure to handle 200+ concurrent API requests while maintaining reliable uptime during peak load.",
        "Recognized among the Top 10 teams out of 40+ for innovation in emergency management and system design."
      ],
      skills: ["Web Development", "System Architecture", "UX/UI Design", "Crisis Management"],
      achievements: [
        { icon: <FiAward />, text: "Top 10 out of 40+ teams" },
        { icon: <FiTrendingUp />, text: "25% faster response time" }
      ]
    }
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-32">

        <motion.div ref={titleRef} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent
                     bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isTitleInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"
          />
        </motion.div>

        <motion.div ref={timelineRef} className="relative mx-auto max-w-4xl">
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={isTimelineInView ? { height: "100%", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 z-0
                    bg-gradient-to-b from-cyan-400/50 via-cyan-400/30 to-transparent"
          />

          <div className="relative z-10 flex flex-col items-center gap-16 md:gap-20">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} />
            ))}
          </div>
        </motion.div>

        <motion.div ref={messageRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMessageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 text-lg">
              More on the way…
            </p>
          </motion.div>
        </motion.div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isSectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2
                w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isSectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-0 left-0 transform -translate-x-1/2
                w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"
      />
    </section>
  );
};

export default Experience;
