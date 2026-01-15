import React from 'react';

const ArtistTree = () => {
  const creators = [
    { id: 1, name: "Neon Ape", role: "Digital Art", color: "border-cyan-400" },
    { id: 2, name: "Cyber Quill", role: "Writer", color: "border-purple-500" },
  ];

  const collectors = [
    { id: 1, name: "Vault Master", badge: "Legendary" },
    { id: 2, name: "Art Knight", badge: "Gold" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center p-10 font-sans">
      
      {/* THE CROWN: Featured Artist of the Month */}
      <div className="w-40 h-40 rounded-full border-4 border-yellow-400 p-1 mb-10 shadow-[0_0_20px_rgba(250,204,21,0.5)]">
        <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
          <span className="text-xs text-center">FEATURED<br/>CREATOR</span>
        </div>
      </div>

      {/* THE BRANCHES: Creators */}
      <div className="flex gap-20 mb-10">
        {creators.map(creator => (
          <div key={creator.id} className={`w-24 h-24 rounded-full border-2 ${creator.color} flex flex-col items-center justify-center bg-slate-900 hover:scale-110 transition-transform cursor-pointer`}>
            <p className="text-[10px] font-bold">{creator.name}</p>
          </div>
        ))}
      </div>

      {/* THE TRUNK: Central Hub */}
      <div className="w-2 bg-gradient-to-b from-cyan-500 to-transparent h-32 relative">
        <div className="absolute top-1/2 -left-20 w-40 text-center font-bold tracking-widest text-cyan-200">
          NEXUS ENGINE
        </div>
      </div>

      {/* THE ROOTS: Collectors */}
      <div className="mt-10 grid grid-cols-4 gap-4">
        {collectors.map(collector => (
          <div key={collector.id} className="p-3 bg-slate-900 border border-slate-700 rounded-lg text-center">
            <p className="text-xs text-cyan-400">{collector.name}</p>
            <p className="text-[8px] uppercase">{collector.badge}</p>
          </div>
        ))}
      </div>
{/* THE TRUNK: The Door to the Inner Circle */}
<div className="group relative cursor-pointer" onClick={() => window.location.href='/community/circle'}>
  {/* Glowing Door Effect */}
  <div className="w-16 h-24 bg-slate-900 border-2 border-cyan-500/50 rounded-t-full 
                  group-hover:border-yellow-400 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] 
                  transition-all duration-500 flex items-center justify-center">
    <span className="text-[10px] text-cyan-200 group-hover:text-yellow-400 font-bold uppercase tracking-tighter">
      Enter<br/>Circle
    </span>
  </div>
  
  {/* The Root Connection */}
  <div className="w-1 bg-gradient-to-b from-cyan-500 to-transparent h-20 mx-auto"></div>
  
  <div className="absolute top-1/2 -left-24 w-48 text-center font-bold tracking-widest text-cyan-200 opacity-50">
    INNER CIRCLE
  </div>
</div>
      <footer className="mt-20 text-slate-500 text-[10px]">
        POWERED BY GITHUB & VERCEL
      </footer>
    </div>
  );
};

export default ArtistTree;
