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
            stroke="rgba(0, 255, 204, 0.15)"
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
          stroke="rgba(0, 255, 204, 0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.line
          x1="400" y1="0" x2="400" y2="800"
          stroke="rgba(0, 255, 204, 0.1)"
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
            stroke="rgba(0, 255, 204, 0.15)"
            strokeWidth="1"
            strokeDasharray="40 20"
          />
        ))}
      </svg>
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="-5" y1="105" x2="45" y2="-5" stroke="rgba(0, 255, 204, 0.08)" strokeWidth="0.15" />
        <line x1="10" y1="105" x2="60" y2="-5" stroke="rgba(0, 255, 204, 0.06)" strokeWidth="0.15" />
      </svg>
    </div>
  );
}

function LFrame({ className }: { className: string }) {
  return (
    <div className={className} aria-hidden="true">
      <span className="absolute left-0 top-0 h-6 w-6 border-l border-t border-[#00FFCC]/40" />
      <span className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-[#00FFCC]/40" />
    </div>
  );
}

const SKILLS = [
  'INDUSTRIAL DESIGN',
  'INTERACTION DESIGN',
  'UX / RESEARCH',
  'PARAMETRIC MODELING',
  'UI WIREFRAME',
];

const CORNER_NOTES = [
  'SYS.UI.FRAMEWORK v2.4.1',
  'INTERACTION DESIGN / 2024',
  'GRID.OFFSET 0x3F // LOCKED',
  'RENDER.PASS — OK',
];

const TOOLKIT = ['Illustrator', 'Rhino', 'Figma', 'Adobe XD'];

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

      {/* 左下偏中：左右并排的数据面板（与左下角名字形成对角线呼应） */}
      <div className="absolute left-4 right-4 top-20 bottom-[34%] z-10 sm:left-[12%] sm:right-auto sm:top-[18%] sm:bottom-[26%] lg:left-[15%]">
        <motion.div
          className="flex h-full flex-col gap-4 sm:flex-row sm:gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {/* 左：视觉展示区 */}
          <div className="relative min-h-0 flex-1 overflow-hidden border border-white/20 bg-neutral-900/40 shadow-[0_0_40px_rgba(0,0,0,0.6)] sm:w-[300px] sm:flex-none lg:w-[340px]">
            <span className="absolute left-4 top-4 z-10 h-2 w-2 rounded-full bg-[#00FFCC]" />
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80"
              alt="Portrait"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-90"
              style={{
                filter: 'grayscale(100%) sepia(100%) hue-rotate(130deg) saturate(300%)',
              }}
            />
          </div>

          {/* 右：终端数据面板 */}
          <div className="min-h-0 flex-1 border border-white/20 bg-neutral-950/40 p-4 shadow-[0_0_40px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:w-[260px] sm:flex-none lg:w-[300px]">
            <p className="text-[10px] tracking-widest text-[#00FFCC]">
              <span className="font-mono">PROFILE_DATA //</span>{' '}
              <span className="font-sans font-medium">个人简介</span>
            </p>

            <div className="mt-4 font-sans text-sm leading-relaxed">
              <section>
                <h3 className="text-[10px] tracking-[0.2em] text-neutral-500">
                  学历 <span className="font-mono">/ EDUCATION</span>
                </h3>
                <p className="mt-2 text-base text-neutral-200">浙江科技大学</p>
                <p className="mt-1 text-neutral-400">工业设计 本科</p>
              </section>

              <div className="my-4 border-b border-white/10" />

              <section>
                <h3 className="text-[10px] tracking-[0.2em] text-neutral-500">
                  擅长工具 <span className="font-mono">/ TOOLKIT</span>
                </h3>
                <ul className="mt-2 flex flex-col gap-2">
                  {TOOLKIT.map((tool) => (
                    <li
                      key={tool}
                      className="w-full border border-white/30 px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-neutral-300 transition-colors hover:border-[#00FFCC] hover:text-[#00FFCC]"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-8 pb-28 md:px-16">
        <motion.div
          className="flex flex-wrap items-baseline gap-x-4 gap-y-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-6xl font-black tracking-widest text-neutral-200 md:text-7xl">
            周泓妤
          </h1>
          <span className="font-mono text-[10px] font-light tracking-[0.3em] text-neutral-500">
            / ZHOU HONGYU
          </span>
        </motion.div>
        <motion.p
          className="mt-3 font-mono text-[10px] font-light tracking-widest text-[#00FFCC]/60"
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
            <span className="border border-white/20 px-3 py-1.5 font-mono text-[10px] font-light tracking-widest text-neutral-400 transition-colors hover:border-[#00FFCC] hover:text-[#00FFCC]">
              {skill}
            </span>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}

export default About;
