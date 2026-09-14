import Reveal from "./Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-14">
      <Reveal>
        <div className="flex items-end justify-between border-b border-ink/10 pb-6">
          <span className="text-xs tracking-[0.25em] text-ink-soft uppercase">
            Services
          </span>
          <span className="text-xs tracking-[0.25em] text-ink-soft uppercase">
            0{services.length}
          </span>
        </div>
      </Reveal>

      <div className="mt-4">
        {services.map((service, i) => (
          <Reveal key={service.number} delay={i * 0.06}>
            <div className="group grid gap-2 border-b border-ink/10 py-10 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-14">
              <span className="font-serif text-sm text-ink-soft sm:col-span-1">
                {service.number}
              </span>
              <h3 className="font-serif text-5xl leading-[0.95] tracking-tight transition-colors duration-300 group-hover:text-accent sm:col-span-7 sm:text-7xl">
                {service.title}
              </h3>
              <p className="max-w-xs text-ink-soft sm:col-span-4">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
