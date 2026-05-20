"use client";

import { Fragment, useRef } from "react";
import { motion, useInView } from "framer-motion";

const strip = (w: string) => w.replace(/[.,;:!?'"«»…]/g, "").toLowerCase();

export default function TextReveal({
  text,
  highlight,
}: {
  text: string;
  highlight?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");

  // Repère la plage contiguë à surligner
  let hlStart = -1;
  let hlLen = 0;
  if (highlight) {
    const hw = highlight.split(" ");
    for (let i = 0; i + hw.length <= words.length; i++) {
      if (hw.every((w, j) => strip(words[i + j]) === strip(w))) {
        hlStart = i;
        hlLen = hw.length;
        break;
      }
    }
  }
  const isHl = (i: number) => hlStart >= 0 && i >= hlStart && i < hlStart + hlLen;

  return (
    <span ref={ref}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "inline-block" }}
          >
            {isHl(i) ? <span className="highlight">{word}</span> : word}
          </motion.span>
          {i < words.length - 1 &&
            (isHl(i) && isHl(i + 1) ? (
              <span className="highlight"> </span>
            ) : (
              " "
            ))}
        </Fragment>
      ))}
    </span>
  );
}
