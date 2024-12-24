import { useState } from "react";
import { motion, useMotionValue, animate } from "motion/react";

export default function Card({ data, flip }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseEnter = () => {
    animate(x, 5, { ease: "easeOut", duration: 0.2 });
    animate(y, -20, { ease: "easeOut", duration: 0.2 });
  };

  const handleMouseLeave = () => {
    animate(x, 0, { ease: "easeOut", duration: 0.2 });
    animate(y, 0, { ease: "easeOut", duration: 0.2 });
  };

  return (
    <div className={`feature ${flip ? "feature-reverse" : ""}`}>
      <img src={data.img} alt={data.title} />
      <motion.div
        style={{ x, y }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="card"
      >
        <motion.div style={{ x, y }} className="chip">
          <h5>{data.summary}</h5>
        </motion.div>
        <motion.div style={{ x, y }} className="content">
          <h5>{data.title}</h5>
          <p>{data.description}</p>
        </motion.div>
        <motion.a style={{ x, y }} className="btn btn-secondary">
          Read More
        </motion.a>
      </motion.div>
    </div>
  );
}
