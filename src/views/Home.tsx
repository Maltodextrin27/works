import { motion } from 'framer-motion';
import SurveyMarks from '@/components/SurveyMarks';

function Home() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8">
      <SurveyMarks />
      <div className="z-10 flex flex-col items-center text-center">
        <p className="mb-6 font-mono text-[10px] font-light tracking-[0.3em] text-[#00FFCC]/60 md:text-xs">
          SYS_READY // DATA_CORE 0x3F
        </p>
        <motion.h1
          className="text-6xl font-black tracking-widest text-neutral-200 md:text-8xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          数字造物
        </motion.h1>
        <motion.p
          className="mt-3 font-mono text-[10px] font-light tracking-[0.4em] text-[#00FFCC]/50 md:text-xs"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
        >
          数字造物 / DIGITAL ARTIFACT
        </motion.p>
        <motion.p
          className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
        >
          <span className="text-sm font-medium tracking-widest text-neutral-300 md:text-base">探索</span>
          <span className="font-mono text-[10px] font-light tracking-[0.25em] text-neutral-500 md:text-xs">
            / EXPLORE
          </span>
          <span className="text-neutral-600">&middot;</span>
          <span className="text-sm font-medium tracking-widest text-neutral-300 md:text-base">设计</span>
          <span className="font-mono text-[10px] font-light tracking-[0.25em] text-neutral-500 md:text-xs">
            / DESIGN
          </span>
          <span className="text-neutral-600">&middot;</span>
          <span className="text-sm font-medium tracking-widest text-neutral-300 md:text-base">创造</span>
          <span className="font-mono text-[10px] font-light tracking-[0.25em] text-neutral-500 md:text-xs">
            / CREATE
          </span>
        </motion.p>
      </div>
      <div className="pointer-events-none absolute inset-x-8 bottom-10 z-10 flex items-center justify-between font-mono text-[10px] font-light tracking-tight text-neutral-400/60 md:text-xs">
        <span>SYS_READY: TRUE // CORE_OK</span>
        <span>DATA_CORE: 0x3F</span>
        <span className="hidden md:inline">PROTOCOL: V2.6</span>
      </div>
    </section>
  );
}

export default Home;
