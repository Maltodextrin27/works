import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const PROJECTS = [
  {
    id: 'PROJ_01',
    name: '山野协议',
    en: 'TERRAIN PROTOCOL',
    src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'PROJ_02',
    name: '数据之海',
    en: 'DATA OCEAN',
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'PROJ_03',
    name: '静默结构',
    en: 'SILENT STRUCTURE',
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'PROJ_04',
    name: '城市切片',
    en: 'URBAN SLICE',
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 'PROJ_05',
    name: '边界样本',
    en: 'BORDER SAMPLE',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  },
] as const;

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const active = PROJECTS[activeIndex];

  // 使用原生 wheel 监听（passive: false）才能真正阻止页面滚动
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let locked = false;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (locked || Math.abs(e.deltaY) < 8) return;
      locked = true;
      setActiveIndex(
        (prev) => (prev + (e.deltaY > 0 ? 1 : -1) + PROJECTS.length) % PROJECTS.length
      );
      window.setTimeout(() => {
        locked = false;
      }, 420);
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden px-8 pt-20 md:flex-row md:gap-12 md:px-16 md:pt-16"
    >
      {/* 左：当前作品大图 */}
      <div className="w-full md:w-[60%]">
        <div className="group relative h-[50vh] w-full overflow-hidden border-2 border-[#00FFCC] bg-neutral-900/40 md:h-[68vh]">
          <motion.div
            key={activeIndex}
            className="h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <img
              src={active.src}
              alt={active.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </motion.div>

          {/* 角标与说明 */}
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 md:p-6">
            <div className="flex items-start justify-between">
              <span className="border border-[#00FFCC]/40 bg-neutral-950/70 px-2 py-1 font-mono text-[10px] tracking-[0.2em] text-[#00FFCC]">
                {active.id}
              </span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-300">
                0{activeIndex + 1} / 0{PROJECTS.length}
              </span>
            </div>
            <div>
              <p className="text-2xl font-black tracking-widest text-neutral-100 md:text-3xl">
                {active.name}
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.3em] text-neutral-400">
                {active.en}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 右：刻度线导航 */}
      <nav className="flex w-full flex-col items-end justify-center gap-5 md:w-[40%] md:gap-7">
        {PROJECTS.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group flex w-full max-w-[260px] flex-col items-end gap-2 text-right"
            >
              <span
                className={cn(
                  'font-mono text-[10px] tracking-[0.2em] transition-colors',
                  isActive
                    ? 'text-[#00FFCC]'
                    : 'text-neutral-500 group-hover:text-neutral-300'
                )}
              >
                {project.id} / {project.name}
              </span>
              <span
                className={cn(
                  'block h-px transition-all duration-300',
                  isActive
                    ? 'w-48 bg-[#00FFCC]'
                    : 'w-16 bg-neutral-600 group-hover:w-24 group-hover:bg-neutral-400'
                )}
              />
            </button>
          );
        })}

        <p className="mt-4 font-mono text-[10px] tracking-[0.3em] text-neutral-600">
          SCROLL &uarr;&darr; / 滚轮切换
        </p>
      </nav>
    </section>
  );
}

export default Portfolio;
