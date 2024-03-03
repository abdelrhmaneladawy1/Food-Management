import { motion } from "framer-motion";
export default function SuccessRequest({ message }) {
  return (
    <>
      <div className="success-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="successSvg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
            d="m9 11 3 3L22 4"
          />
        </svg>
        <h4>{message}</h4>
      </div>
    </>
  );
}
