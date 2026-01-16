<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fancy Ape™ | Biosphere</title>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
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
              
              {/* THE CANOPY: Featured Artist & Sky */}
              <div className="w-40 h-40 rounded-full border-4 border-yellow-400 p-1 mb-10 shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="text-xs text-center uppercase tracking-widest font-bold">Featured<br/>Creator</span>
                </div>
              </div>

              {/* THE BRANCHES: Creators Evolving */}
              <div className="flex gap-20 mb-10">
                {creators.map(creator => (
                  <div key={creator.id} className={`w-24 h-24 rounded-full border-2 ${creator.color} flex flex-col items-center justify-center bg-slate-900 hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-cyan-500/10`}>
                    <p className="text-[10px] font-bold uppercase tracking-tighter">{creator.name}</p>
                  </div>
                ))}
              </div>

              {/* THE TRUNK: The Nexus Engine */}
              <div className="w-2 bg-gradient-to-b from-cyan-500 to-transparent h-20 relative mb-4">
                <div className="absolute top-1/2 -left-20 w-40 text-center font-bold tracking-widest text-cyan-200 text-[10px] opacity-70 uppercase">
                  Nexus Engine
                </div>
              </div>

              {/* THE DOOR: Entrance to the Inner Circle / Tree House */}
              <div className="group relative cursor-pointer mb-10" onClick={() => window.location.href='/community/circle'}>
                <div className="w-16 h-24 bg-slate-900 border-2 border-cyan-500/50 rounded-t-full group-hover:border-yellow-400 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.6)] transition-all duration-500 flex items-center justify-center mx-auto">
                  <span className="text-[10px] text-cyan-200 group-hover:text-yellow-400 font-bold uppercase tracking-tighter text-center">
                    Enter<br/>Circle
                  </span>
                </div>
                <div className="w-1 bg-gradient-to-b from-cyan-500 to-transparent h-16 mx-auto"></div>
                <div className="text-center font-bold tracking-widest text-cyan-200 opacity-40 mt-2 text-[10px] uppercase">
                  Inner Circle
                </div>
              </div>

              {/* THE ROOTS & DIRT: Collector Foundation & Tech */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                {collectors.map(collector => (
                  <div key={collector.id} className="p-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-center backdrop-blur-sm">
                    <p className="text-xs text-cyan-400 font-medium">{collector.name}</p>
                    <p className="text-[8px] uppercase tracking-widest text-slate-500 mt-1">{collector.badge}</p>
                  </div>
                ))}
              </div>

              <footer className="mt-20 text-slate-600 text-[9px] tracking-[0.3em] uppercase">
                Powered by GitHub & Vercel
              </footer>
            </div>
          );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<ArtistTree />);
    </script>
</body>
</html>
