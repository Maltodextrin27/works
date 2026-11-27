import { cn } from '@/lib/utils';

const LINKS = [
  { key: 'home', label: '主页', en: 'HOME' },
  { key: 'about', label: '简介', en: 'ABOUT' },
  { key: 'portfolio', label: '作品集', en: 'WORK' },
  { key: 'contact', label: '联系', en: 'CONTACT' },
] as const;

interface NavbarProps {
  active: string;
  onNavigate: (key: 'home' | 'about' | 'portfolio' | 'contact') => void;
}

function Navbar({ active, onNavigate }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-8">
        <span className="text-sm font-black text-neutral-200">PORTFOLIO</span>
        <ul className="flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.key}>
              <button
                onClick={() => onNavigate(link.key)}
                className={cn(
                  'group flex items-baseline gap-1.5 text-sm font-normal transition-colors hover:text-[#00FFCC]',
                  active === link.key ? 'text-[#00FFCC]' : 'text-neutral-400'
                )}
              >
                <span>{link.label}</span>
                <span className="font-mono text-[10px] tracking-[0.15em] opacity-60 transition-opacity group-hover:opacity-100">
                  / {link.en}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="w-16" />
      </nav>
    </header>
  );
}

export default Navbar;
