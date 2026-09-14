"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";

const title = "Je transforme l'identité de votre lieu en expérience digitale.";

export default function Hero() {
  const words = title.split(" ");
  const featured = projects[0];
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 60]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28"
    >
      <div className="px-6 sm:px-10 lg:pr-0 lg:pl-14">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.25em] text-ink-soft uppercase"
        >
          Rym Dhaouadi — Webdesign / UX-UI
        </motion.p>

        <div className="mt-6 grid gap-14 lg:mt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-8">
          <div>
            <h1 className="max-w-3xl font-serif text-[2.5rem] leading-[1.03] tracking-tight text-ink sm:text-6xl lg:text-[4.6rem]">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + i * 0.055,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mr-[0.26em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-8 max-w-sm text-base text-ink-soft sm:text-lg"
            >
              Sites sur mesure pour restaurants, bars, hôtels et lieux
              lifestyle en France et en Espagne.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-12 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm text-paper transition-colors hover:bg-accent-dark"
                >
                  Démarrer un projet →
                </a>
                <a
                  href="#travaux"
                  className="inline-flex items-center justify-center rounded-full border border-ink/30 px-7 py-3.5 text-sm text-ink transition-colors hover:border-ink"
                >
                  Voir mes projets
                </a>
              </div>
              <p className="flex items-center gap-2 text-xs tracking-wide text-ink-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Disponible pour projets sélectionnés
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-3 flex items-baseline justify-between text-[0.65rem] tracking-[0.2em] text-ink-soft uppercase lg:pr-14">
              <span>Selected Work — 01</span>
              <span>{featured.client} · {featured.year}</span>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink sm:aspect-[16/11] lg:mr-[-3.5rem]">
              <motion.div style={{ y: imageY }} className="absolute inset-[-5%]">
                {featured.image ? (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <p className="font-serif text-4xl italic text-paper/80">
                      {featured.client}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
