import { useData } from '../context/DataContext';

export default function NoticeTicker() {
  const { data } = useData();

  if (!data?.notices || data.notices.length === 0) {
    return null;
  }

  return (
    <div className="bg-primary-light border-b border-primary/30 sticky top-[125px] z-30">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3">
        <span className="shrink-0 px-2 py-0.5 bg-primary text-white text-xs font-bold rounded shadow-sm z-10">
          NOTICES
        </span>
        <div className="overflow-hidden whitespace-nowrap mask-edges relative flex-1">
          <div className="inline-block animate-marquee hover:[animation-play-state:paused] cursor-pointer">
            {data.notices.map((n, i) => (
              <span key={n.id} className="text-sm text-navy mx-8 font-medium">
                <span className="text-primary mr-1">📌</span> 
                {n.title} <span className="text-gray-500 mx-1">—</span> {n.content}
                {i < data.notices.length - 1 && <span className="mx-6 text-gray-300">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 120s linear infinite;
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
      `}</style>
    </div>
  );
}
