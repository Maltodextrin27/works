import { motion } from 'framer-motion';

function ArcBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute -right-[20%] top-1/2 h-[160%] w-auto -translate-y-1/2"
        viewBox="0 0 800 800"
      >
        {[120, 200, 280, 360, 440].map((r, i) => (
          <motion.circle
            key={r}
            cx="400"
            cy="400"
            r={r}
            fill="none"
            stroke="rgba(0, 240, 255, 0.15)"
            strokeWidth="1"
            strokeDasharray={i % 2 === 0 ? 'none' : '2 6'}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: i * 0.2, ease: 'easeInOut' }}
          />
        ))}
        <motion.line
          x1="0" y1="400" x2="800" y2="400"
          stroke="rgba(0, 240, 255, 0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.line
          x1="400" y1="0" x2="400" y2="800"
          stroke="rgba(0, 240, 255, 0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />
      </svg>
      <svg
        className="absolute -left-24 top-8 h-72 w-72"
        viewBox="0 0 100 100"
      >
        {[20, 35, 50].map((r) => (
          <circle
            key={r}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="rgba(0, 240, 255, 0.15)"
            strokeWidth="1"
            strokeDasharray="40 20"
          />
        ))}
      </svg>
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="-5" y1="105" x2="45" y2="-5" stroke="rgba(0, 240, 255, 0.08)" strokeWidth="0.15" />
        <line x1="10" y1="105" x2="60" y2="-5" stroke="rgba(0, 240, 255, 0.06)" strokeWidth="0.15" />
      </svg>
    </div>
  );
}

function LFrame({ className }: { className: string }) {
  return (
    <div className={className} aria-hidden="true">
      <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-cyan-400/40" />
      <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-cyan-400/40" />
    </div>
  );
}

const SKILLS = [
  'INDUSTRIAL DESIGN',
  'INTERACTION DESIGN',
  'GIS / SPATIAL',
  'PARAMETRIC MODELING',
  'UI WIREFRAME',
];

const CORNER_NOTES = [
  'SYS.UI.FRAMEWORK v2.4.1',
  'INTERACTION DESIGN / 2024',
  'GRID.OFFSET 0x3F // LOCKED',
  'RENDER.PASS — OK',
];

function About() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <ArcBackdrop />

      <LFrame className="absolute left-8 top-24 h-40 w-40" />
      <LFrame className="absolute bottom-24 right-8 h-56 w-56" />
      <LFrame className="absolute left-1/2 top-1/3 h-24 w-24" />

      <span className="absolute left-8 top-24 ml-10 mt-2 font-mono text-[10px] font-light text-neutral-500">
        {CORNER_NOTES[0]}
      </span>
      <span className="absolute right-8 top-8 font-mono text-[10px] font-light text-neutral-500">
        {CORNER_NOTES[1]}
      </span>
      <span className="absolute bottom-8 left-8 font-mono text-[10px] font-light text-neutral-500">
        {CORNER_NOTES[2]}
      </span>
      <span className="absolute bottom-24 right-8 -mt-8 font-mono text-[10px] font-light text-neutral-500">
        {CORNER_NOTES[3]}
      </span>

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-8 pb-28 md:px-16">
        <motion.h1
          className="text-6xl font-black tracking-tight text-neutral-200 md:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          YOUR NAME
        </motion.h1>
        <motion.p
          className="mt-3 font-mono text-[10px] font-light tracking-widest text-cyan-400/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          DESIGNER // PORTFOLIO INDEX
        </motion.p>
      </div>

      <motion.ul
        className="absolute right-8 top-1/2 z-10 flex -translate-y-1/2 flex-col items-end gap-3 md:right-16"
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        {SKILLS.map((skill) => (
          <li key={skill}>
            <span className="border border-white/10 px-3 py-1.5 font-mono text-[10px] font-light tracking-widest text-neutral-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-400">
              {skill}
            </span>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}

export default About;
