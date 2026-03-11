import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { techIcons } from "../components/Icons";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks, SiCodingninjas } from "react-icons/si";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Skills = () => {

const [hoveredSkill, setHoveredSkill] = useState(null);

const scrollRefs = useRef([]);
const sectionRef = useRef(null);
const titleRef = useRef(null);
const competitiveRef = useRef(null);

const category1Ref = useRef(null);
const category2Ref = useRef(null);
const category3Ref = useRef(null);
const category4Ref = useRef(null);
const category5Ref = useRef(null);

const categoryRefs = [
  category1Ref,
  category2Ref,
  category3Ref,
  category4Ref,
  category5Ref
];

const isSectionInView = useInView(sectionRef, { amount: 0.1 });
const isTitleInView = useInView(titleRef, { amount: 0.7 });
const isCompetitiveInView = useInView(competitiveRef, { amount: 0.3 });

const isCategory1InView = useInView(category1Ref, { amount: 0.2 });
const isCategory2InView = useInView(category2Ref, { amount: 0.2 });
const isCategory3InView = useInView(category3Ref, { amount: 0.2 });
const isCategory4InView = useInView(category4Ref, { amount: 0.2 });
const isCategory5InView = useInView(category5Ref, { amount: 0.2 });

const categoryVisibility = [
  isCategory1InView,
  isCategory2InView,
  isCategory3InView,
  isCategory4InView,
  isCategory5InView
];

useEffect(() => {
  scrollRefs.current = scrollRefs.current.slice(0, 5);
}, []);

const skillCategories = [

{
title: "Frontend Development",
color: "from-cyan-400 to-blue-500",
skills: [
{ name: "React.js", icon: "react" },
{ name: "JavaScript", icon: "javascript" },
{ name: "HTML5", icon: "html" },
{ name: "CSS3", icon: "css" },
{ name: "Tailwind CSS", icon: "tailwind" },
{ name: "Bootstrap", icon: "bootstrap" },
{ name: "Material UI", icon: "mui" },
{ name: "jQuery", icon: "jquery" },
{ name: "Framer Motion", icon: "framer" },
{ name: "Vite", icon: "vite" }
]
},

{
title: "Backend Development",
color: "from-green-400 to-emerald-500",
skills: [
{ name: "Node.js", icon: "node" },
{ name: "Express.js", icon: "express" },
{ name: "MongoDB", icon: "mongodb" },
{ name: "MySQL", icon: "mysql" },
{ name: "Socket.IO", icon: "socketio" },
{ name: "Redis", icon: "redis" },
{ name: "JWT", icon: "jwt" },
{ name: "REST APIs", icon: "api" },
{ name: "Cloudinary", icon: "cloudinary" },
{ name: "Stripe", icon: "stripe" }
]
},

{
title: "Programming Languages",
color: "from-purple-400 to-pink-500",
skills: [
{ name: "C++", icon: "cpp" },
{ name: "C", icon: "c" },
{ name: "Python", icon: "python" },
{ name: "JavaScript", icon: "javascript" },
{ name: "Data Structures", icon: "dsa" },
{ name: "Algorithms", icon: "algorithm" }
]
},

{
title: "Data Science & ML",
color: "from-indigo-400 to-cyan-500",
skills: [
{ name: "NumPy", icon: "numpy" },
{ name: "Pandas", icon: "pandas" },
{ name: "Scikit-learn", icon: "sklearn" },
{ name: "Streamlit", icon: "streamlit" },
{ name: "Jupyter Notebook", icon: "jupyter" },
{ name: "REST APIs", icon: "api" }
]
},

{
title: "Tools & Deployment",
color: "from-orange-400 to-red-500",
skills: [
{ name: "Git", icon: "git" },
{ name: "GitHub", icon: "github" },
{ name: "VS Code", icon: "vscode" },
{ name: "Postman", icon: "postman" },
{ name: "Vercel", icon: "vercel" },
{ name: "Render", icon: "render" },
{ name: "Docker", icon: "docker" }
]
}

];

const scrollLeft = (index) => {
  if (scrollRefs.current[index]) {
    scrollRefs.current[index].scrollBy({ left: -320, behavior: "smooth" });
  }
};

const scrollRight = (index) => {
  if (scrollRefs.current[index]) {
    scrollRefs.current[index].scrollBy({ left: 320, behavior: "smooth" });
  }
};

return (

<section id="skills" ref={sectionRef} className="relative py-12">

<div className="container mx-auto px-6 xl:px-32">

<div ref={titleRef} className="text-center mb-14">
<motion.h2
initial={{ opacity: 0, y: 20 }}
animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
>
Technical Skills
</motion.h2>
</div>

<div className="space-y-16">

{skillCategories.map((category, categoryIndex) => (

<div key={categoryIndex} ref={categoryRefs[categoryIndex]}>

<motion.h3
initial={{ opacity: 0, y: 20 }}
animate={categoryVisibility[categoryIndex] ? { opacity: 1, y: 0 } : {}}
className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
>
{category.title}
</motion.h3>

<div className="relative group">

<button
onClick={() => scrollLeft(categoryIndex)}
className="absolute -left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center"
>
<HiChevronLeft className="text-white" />
</button>

<button
onClick={() => scrollRight(categoryIndex)}
className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center"
>
<HiChevronRight className="text-white" />
</button>

<div
ref={(el) => (scrollRefs.current[categoryIndex] = el)}
className="flex gap-5 overflow-x-auto scrollbar-hide pb-4"
>

{category.skills.map((skill, skillIndex) => (

<motion.div
key={skillIndex}
whileHover={{ y: -10, scale: 1.1 }}
onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
onMouseLeave={() => setHoveredSkill(null)}
className="flex-shrink-0 w-32 h-32 bg-gray-800 rounded-xl flex flex-col items-center justify-center border border-gray-700"
>

<span className="text-4xl">{techIcons[skill.icon]}</span>

<p className="text-xs text-gray-300 mt-2 text-center">
{skill.name}
</p>

</motion.div>

))}

</div>

</div>

</div>

))}

</div>

</div>

</section>

);
};

export default Skills;