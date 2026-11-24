import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import TopographicBackground from '@/components/TopographicBackground';
import Home from '@/views/Home';
import About from '@/views/About';
import Portfolio from '@/views/Portfolio';
import Contact from '@/views/Contact';

const VIEWS = {
  home: Home,
  about: About,
  portfolio: Portfolio,
  contact: Contact,
} as const;

type ViewKey = keyof typeof VIEWS;

function App() {
  const [active, setActive] = useState<ViewKey>('home');
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (active !== 'home') return;
    const handleMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      setOffset({ x: nx * -18, y: ny * -12 });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [active]);

  const ActiveView = VIEWS[active];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 tracking-tight">
      <TopographicBackground offsetX={offset.x} offsetY={offset.y} />
      <Navbar active={active} onNavigate={setActive} />
      <main className="relative z-10 min-h-screen">
        <ActiveView />
      </main>
    </div>
  );
}

export default App;
