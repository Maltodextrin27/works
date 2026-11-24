import { motion } from 'framer-motion';

function TopographicBackground({ offsetX, offsetY }: { offsetX: number; offsetY: number }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="topo-texture absolute -inset-10"
        animate={{ x: offsetX, y: offsetY }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,10,10,0.8)_100%)]" />
    </div>
  );
}

export default TopographicBackground;
