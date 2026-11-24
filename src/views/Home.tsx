import { motion } from 'framer-motion';
import SurveyMarks from '@/components/SurveyMarks';

function Home() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8">
      <SurveyMarks />
      <div className="z-10 flex flex-col items-center text-center">
        <p className="mb-6 font-mono text-[10px] font-light tracking-widest text-cyan-400/50 md:text-xs">
          TOPO_SYS_READY // GRID_48KM
        </p>
        <motion.h1
          className="text-6xl font-black text-neutral-200 md:text-8xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          YOUR NAME
        </motion.h1>
        <motion.p
          className="mt-6 text-sm font-light tracking-tight text-neutral-400 md:text-base"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
        >
          DESIGN &middot; ENGINEER &middot; CREATOR
        </motion.p>
      </div>
      <div className="pointer-events-none absolute inset-x-8 bottom-10 z-10 flex items-center justify-between font-mono text-[10px] font-light tracking-tight text-neutral-400/60 md:text-xs">
        <span>LAT: 30.2741 N // LON: 120.1551 E</span>
        <span>ELEV: 415m</span>
        <span className="hidden md:inline">SCALE 1:50000</span>
      </div>
    </section>
  );
}

export default Home;
