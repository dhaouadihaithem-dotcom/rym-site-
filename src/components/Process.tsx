import Reveal from "./Reveal";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="bg-ink px-6 py-28 text-paper sm:px-10 sm:py-36 lg:px-14">
      <Reveal>
        <h2 className="mb-14 font-serif text-3xl tracking-tight sm:mb-20 sm:text-4xl">
          Process
        </h2>
      </Reveal>

      <div className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 sm:grid sm:grid-cols-5 sm:gap-6 sm:overflow-visible sm:pb-0">
        {process.map((step, i) => (
          <Reveal
            key={step.number}
            delay={i * 0.08}
            className="w-[75%] shrink-0 snap-start sm:w-auto"
          >
            <div className="flex h-full flex-col gap-4 border-t border-paper/20 pt-6">
              <span className="font-serif text-lg text-paper/50">
                {step.number}
              </span>
              <h3 className="font-serif text-xl tracking-tight">
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
