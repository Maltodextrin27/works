function SurveyMarks() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
      <span className="absolute left-6 top-24 font-mono text-[10px] font-light text-[#00FFCC]/40">+</span>
      <span className="absolute right-10 top-1/3 font-mono text-[10px] font-light text-[#00FFCC]/30">+</span>
      <span className="absolute bottom-16 left-1/4 font-mono text-[10px] font-light text-[#00FFCC]/30">+</span>
      <span className="absolute right-1/4 bottom-28 font-mono text-[10px] font-light text-[#00FFCC]/20">+</span>
      <div className="absolute left-8 bottom-24 flex items-center gap-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="block w-px bg-[#00FFCC]/25"
            style={{ height: i % 2 === 0 ? '12px' : '6px' }}
          />
        ))}
      </div>
      <div className="absolute right-8 top-28 flex items-center gap-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="block w-px bg-[#00FFCC]/25"
            style={{ height: i % 2 === 0 ? '12px' : '6px' }}
          />
        ))}
      </div>
    </div>
  );
}

export default SurveyMarks;
