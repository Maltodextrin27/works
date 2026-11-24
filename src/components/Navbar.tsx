import { cn } from '@/lib/utils';

const LINKS = [
  { key: 'home', label: '主页' },
  { key: 'about', label: '简介' },
  { key: 'portfolio', label: '作品集' },
  { key: 'contact', label: '联系' },
] as const;

interface NavbarProps {
  active: string;
  onNavigate: (key: string) => void;
}

function Navbar({ active, onNavigate }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-8">
        <span className="text-sm font-black text-neutral-200">PORTFOLIO</span>
        <ul className="flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.key}>
              <button
                onClick={() => onNavigate(link.key)}
                className={cn(
                  'text-sm font-light transition-colors hover:text-cyan-400',
                  active === link.key ? 'text-cyan-400' : 'text-neutral-400'
                )}
              >
                {link.label}
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
