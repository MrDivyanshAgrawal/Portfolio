// src/components/Icons.jsx
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiPhone, 
  FiCode, 
  FiServer, 
  FiDatabase, 
  FiSettings,
  FiGlobe,
  FiPackage
} from 'react-icons/fi';

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJs,
  FaGithub,
  FaDatabase,
  FaBootstrap,
  FaInstagram,
  FaGitAlt
} from 'react-icons/fa';

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedis,
  SiSocketdotio,
  // Removed SiVisualstudio - it doesn't exist
  SiPostman,
  SiFramer,
  SiJquery,
  SiMui,
  SiVite,
  SiJsonwebtokens,
  SiVercel,
  SiRender,
  SiMysql,
  SiCplusplus,
  SiC,
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
  SiCloudinary, 
  SiStripe
} from 'react-icons/si';

import { BiCodeAlt, BiCodeBlock } from 'react-icons/bi';
import { TbApi } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc'; // VS Code icon

export const socialIcons = {
  github: <FiGithub />,
  linkedin: <FiLinkedin />,
  email: <FiMail />,
  phone: <FiPhone />,
  website: <FiGlobe />,
  instagram: <FaInstagram />,
  leetcode: <SiLeetcode />,
  codechef: <SiCodechef />
};

export const techIcons = {
  // Frontend
  react: <FaReact className="text-cyan-400" />,
  javascript: <FaJs className="text-yellow-400" />,
  html: <FaHtml5 className="text-orange-500" />,
  css: <FaCss3Alt className="text-blue-500" />,
  tailwind: <SiTailwindcss className="text-cyan-400" />,
  bootstrap: <FaBootstrap className="text-purple-600" />,
  mui: <SiMui className="text-blue-400" />,
  jquery: <SiJquery className="text-blue-600" />,
  framer: <SiFramer className="text-pink-400" />,
  vite: <SiVite className="text-purple-400" />,
  
  // Backend
  node: <FaNodeJs className="text-green-500" />,
  express: <SiExpress className="text-gray-400" />,
  mongodb: <SiMongodb className="text-green-500" />,
  mysql: <SiMysql className="text-blue-400" />,
  redis: <SiRedis className="text-red-500" />,
  socketio: <SiSocketdotio className="text-white" />,
  jwt: <SiJsonwebtokens className="text-pink-400" />,
  api: <TbApi className="text-cyan-400" />,
  cloudinary: <SiCloudinary className="text-blue-400" />,
  stripe: <SiStripe className="text-purple-500" />,
  
  // Programming Languages
  cpp: <SiCplusplus className="text-blue-500" />,
  c: <SiC className="text-blue-600" />,
  python: <FaPython className="text-yellow-400" />,
  dsa: <BiCodeBlock className="text-purple-400" />,
  algorithm: <BiCodeAlt className="text-green-400" />,
  
  // Tools & Deployment
  git: <FaGitAlt className="text-orange-500" />,
  github: <FaGithub className="text-white" />,
  vscode: <VscCode className="text-blue-500" />, // Using VscCode
  postman: <SiPostman className="text-orange-500" />,
  vercel: <SiVercel className="text-white" />,
  render: <SiRender className="text-teal-400" />,
  
  // Competitive Programming
  leetcode: <SiLeetcode className="text-yellow-500" />,
  codechef: <SiCodechef className="text-amber-600" />,
  geeksforgeeks: <SiGeeksforgeeks className="text-green-600" />
};

// Additional icons that might be useful
export const categoryIcons = {
  frontend: <FiCode className="text-cyan-400" />,
  backend: <FiServer className="text-green-400" />,
  database: <FiDatabase className="text-blue-400" />,
  tools: <FiSettings className="text-purple-400" />,
  deployment: <FiPackage className="text-orange-400" />
};

export default { socialIcons, techIcons, categoryIcons };
