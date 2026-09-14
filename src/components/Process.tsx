"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import { process } from "@/lib/data";

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-ink px-6 py-24 text-paper sm:px-10 sm:py-32 lg:px-14"
    >
      <Reveal>
        <div className="flex items-end justify-between border-b border-paper/15 pb-6">
          <span className="text-xs tracking-[0.25em] text-paper/50 uppercase">
            Process
          </span>
          <span className="text-xs tracking-[0.25em] text-paper/50 uppercase">
            De l&apos;idée à l&apos;expérience
          </span>
        </div>
      </Reveal>

      <div className="relative mt-4 h-px w-full bg-paper/15">
        <motion.div
          style={{ scaleX: lineScale }}
          className="absolute inset-y-0 left-0 w-full origin-left bg-accent"
        />
      </div>

      <div className="flex snap-x snap-mandatory gap-10 overflow-x-auto pt-10 pb-4 sm:grid sm:grid-cols-5 sm:gap-6 sm:overflow-visible sm:pb-0 sm:pt-16">
        {process.map((step, i) => (
          <Reveal
            key={step.number}
            delay={i * 0.08}
            className="w-[70%] shrink-0 snap-start sm:w-auto"
          >
            <div className="flex h-full flex-col gap-6">
              <span className="font-serif text-6xl leading-none text-paper/20">
                {step.number}
              </span>
              <h3 className="font-serif text-2xl tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-paper/60">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
