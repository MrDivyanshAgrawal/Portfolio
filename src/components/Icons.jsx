import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJs,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedis,
  SiSocketdotio,
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
  SiCloudinary,
  SiStripe,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiStreamlit,
  SiJupyter,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { BiCodeAlt, BiCodeBlock } from "react-icons/bi";
import { VscCode } from "react-icons/vsc";

export const techIcons = {
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

  cpp: <SiCplusplus className="text-blue-500" />,
  c: <SiC className="text-blue-600" />,
  python: <FaPython className="text-yellow-400" />,
  dsa: <BiCodeBlock className="text-purple-400" />,
  algorithm: <BiCodeAlt className="text-green-400" />,

  numpy: <SiNumpy className="text-blue-400" />,
  pandas: <SiPandas className="text-purple-400" />,
  sklearn: <SiScikitlearn className="text-orange-400" />,
  streamlit: <SiStreamlit className="text-red-400" />,
  jupyter: <SiJupyter className="text-orange-500" />,

  git: <FaGitAlt className="text-orange-500" />,
  github: <FaGithub className="text-white" />,
  vscode: <VscCode className="text-blue-500" />,
  postman: <SiPostman className="text-orange-500" />,
  vercel: <SiVercel className="text-white" />,
  render: <SiRender className="text-teal-400" />,
  docker: <FaDocker className="text-blue-400" />,
};

export default techIcons;
