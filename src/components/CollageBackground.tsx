import { motion } from 'framer-motion';

interface CollageBackgroundProps {
  offsetX: number;
  offsetY: number;
}

/**
 * 构成主义几何拼贴背景层
 * 纯 CSS / SVG 绘制的矩形、三角、切割线与数字阵列，固定在所有内容层之下。
 */
function CollageBackground({ offsetX, offsetY }: CollageBackgroundProps) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-neutral-950"
      aria-hidden="true"
    >
      {/* 几何色块拼贴（含轻微视差） */}
      <motion.div
        className="absolute -inset-24"
        animate={{ x: offsetX, y: offsetY }}
        transition={{ type: 'spring', stiffness: 30, damping: 22 }}
      >
        {/* 左侧巨型深色矩形 */}
        <div className="absolute -left-[14%] top-[4%] h-[60vh] w-[58vw] -rotate-[7deg] bg-neutral-900/90" />

        {/* 右上错位深灰矩形 */}
        <div className="absolute left-[54%] top-[10%] h-[34vh] w-[40vw] rotate-[10deg] bg-neutral-800/50" />

        {/* 底部近黑矩形，压住画面下缘 */}
        <div className="absolute -left-[6%] bottom-[-18%] h-[64vh] w-[38vw] rotate-[4deg] bg-black" />

        {/* 右下斜切色块 */}
        <div className="absolute right-[-10%] bottom-[2%] h-[46vh] w-[34vw] -rotate-[14deg] bg-neutral-900/70" />

        {/* 三角形裁剪：顶部中央 */}
        <div
          className="absolute left-[34%] top-[-14%] h-[72vh] w-[44vw] rotate-6 bg-neutral-900/80"
          style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
        />

        {/* 三角形裁剪：右下 */}
        <div
          className="absolute right-[6%] bottom-[-12%] h-[58vh] w-[42vw] -rotate-3 bg-neutral-800/40"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)' }}
        />

        {/* 三角形裁剪：左中小块 */}
        <div
          className="absolute left-[-8%] top-[36%] h-[30vh] w-[28vw] rotate-[18deg] bg-neutral-700/30"
          style={{ clipPath: 'polygon(0% 0%, 100% 18%, 0% 100%)' }}
        />

        {/* 细线框矩形，构成主义式辅助框 */}
        <div className="absolute left-[60%] top-[52%] h-[26vh] w-[22vw] rotate-[10deg] border border-white/[0.08]" />

        {/* 青色半透明方形遮罩 */}
        <div className="absolute left-[46%] top-[36%] h-24 w-24 bg-[#00FFCC]/10 mix-blend-screen" />
        <div className="absolute right-[16%] top-[18%] h-16 w-16 border border-[#00FFCC]/30 bg-[#00FFCC]/5" />
        <div className="absolute left-[10%] bottom-[26%] h-9 w-9 bg-[#00FFCC]/20" />
      </motion.div>

      {/* 极细切割线，切割画面比例 */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-[18%] w-px bg-white/[0.07]" />
        <div className="absolute inset-y-0 left-[82%] w-px bg-white/[0.06]" />
        <div className="absolute inset-x-0 top-[22%] h-px bg-white/[0.06]" />
        <div className="absolute inset-x-0 bottom-[24%] h-px bg-white/[0.07]" />
        <div className="absolute left-1/2 top-1/2 h-px w-[170vmax] -translate-x-1/2 -translate-y-1/2 -rotate-[24deg] bg-white/[0.05]" />
        <div className="absolute left-1/2 top-1/2 h-px w-[120vmax] -translate-x-1/2 -translate-y-1/2 rotate-[38deg] bg-[#00FFCC]/10" />
        <div className="absolute -left-10 top-[62%] h-px w-[46vw] rotate-[12deg] bg-white/[0.06]" />
      </div>

      {/* 青色节点：线条交点上的高亮圆点 */}
      <span className="absolute left-[18%] top-[22%] block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FFCC]" />
      <span className="absolute left-[82%] bottom-[24%] block h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#00FFCC]/80" />
      <span className="absolute left-[60%] top-[22%] block h-1 w-1 rounded-full bg-[#00FFCC]/60" />
      <span className="absolute left-[18%] bottom-[24%] block h-1 w-1 rounded-full bg-[#00FFCC]/60" />

      {/* 数字阵列：点阵 */}
      <div className="dot-matrix absolute left-0 top-0 h-48 w-56 opacity-50 [mask-image:linear-gradient(135deg,black,transparent_72%)]" />
      <div className="dot-matrix absolute bottom-0 right-0 h-56 w-64 opacity-40 [mask-image:linear-gradient(315deg,black,transparent_70%)]" />
      <div className="dot-matrix absolute right-[6%] top-[30%] h-24 w-24 opacity-30 [mask-image:linear-gradient(180deg,black,transparent)]" />

      {/* 数字阵列：条形码 / 刻度线 */}
      <div className="barcode-v absolute bottom-16 left-[6%] h-32 w-20 opacity-25" />
      <div className="barcode-h absolute right-[8%] top-24 h-16 w-40 opacity-20" />
      <div className="barcode-h absolute bottom-10 left-1/2 h-8 w-32 -translate-x-1/2 opacity-20" />

      {/* 颗粒噪点 */}
      <div className="noise-layer absolute inset-0" />

      {/* 中心暗角，保证中央文字可读 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(5,5,5,0.88)_100%)]" />
    </div>
  );
}

export default CollageBackground;
