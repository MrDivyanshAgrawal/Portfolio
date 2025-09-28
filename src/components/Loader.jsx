import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-slate-900 flex flex-col items-center justify-center z-50">
      <motion.div
        className="w-20 h-20 border-4 border-t-indigo-500 border-r-transparent border-b-teal-400 border-l-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-lg text-white"
      >
        Loading Divyansh's Portfolio...
      </motion.p>
    </div>
  );
};

export default Loader;
