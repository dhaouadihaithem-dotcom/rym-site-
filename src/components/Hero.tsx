"use client";

import { motion } from "framer-motion";

const title = "Digital experiences for places with an identity.";

export default function Hero() {
  const words = title.split(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pt-32 pb-10 sm:px-10 lg:px-14"
    >
      <div className="flex flex-col gap-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.2em] text-ink-soft uppercase"
        >
          Rym Dhaouadi — Webdesign &amp; UX/UI Design
        </motion.p>

        <h1 className="max-w-5xl font-serif text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[5.5rem]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-md text-base text-ink-soft sm:text-lg"
        >
          Je conçois des sites et interfaces sur mesure pour les
          restaurants, bars, hôtels et marques qui ont déjà un univers fort.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center"
      >
        <a
          href="#travaux"
          className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm text-paper transition-colors hover:bg-accent-dark"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-ink/30 px-7 py-3.5 text-sm text-ink transition-colors hover:border-ink"
        >
          Parlons de votre projet
        </a>
      </motion.div>
    </section>
  );
}
