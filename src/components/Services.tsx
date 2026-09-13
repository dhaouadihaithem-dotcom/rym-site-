import Reveal from "./Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14">
      <Reveal>
        <h2 className="mb-14 font-serif text-3xl tracking-tight sm:mb-20 sm:text-4xl">
          Services
        </h2>
      </Reveal>

      <div className="divide-y divide-ink/10 border-t border-ink/10">
        {services.map((service, i) => (
          <Reveal key={service.number} delay={i * 0.05}>
            <div className="group flex flex-col gap-2 py-7 sm:flex-row sm:items-center sm:gap-8 sm:py-9">
              <span className="font-serif text-sm text-ink-soft sm:w-12">
                {service.number}
              </span>
              <h3 className="font-serif text-2xl tracking-tight sm:w-72 sm:text-3xl">
                {service.title}
              </h3>
              <p className="max-w-lg text-ink-soft sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
