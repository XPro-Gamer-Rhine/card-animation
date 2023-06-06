import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "../Reveal";
import Card from "../card";

const ParallaxCard = ({ duration, image, width }: any) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  if (duration === undefined || duration === null || duration === "") {
    duration = 0.7;
  }
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: duration }}
      >
        <Reveal>
          <Card image={image} width={width} />
        </Reveal>
      </motion.div>
    </>
  );
};

export default ParallaxCard;
