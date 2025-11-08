import React from 'react';
import { MapPin, History, Clock, Recycle, Navigation } from 'lucide-react';

const HistoryItem = ({ date, material, reward }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-xl bg-white/60 dark:bg-neutral-800/60 border border-white/20 dark:border-white/10 grid place-items-center">
        <Recycle size={18} className="text-[#00C853]" />
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-900 dark:text-white">{material}</p>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">{date}</p>
      </div>
    </div>
    <p className="text-sm font-semibold text-neutral-900 dark:text-white">+{reward} pts</p>
  </div>
);

const MapAndHistory = () => {
  return (
    <section className="mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="relative rounded-2xl overflow-hidden bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10 lg:col-span-2">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[#00C853]" />
              <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">Nearby SmartBins</p>
            </div>
            <button className="px-3 py-1.5 rounded-lg bg-[#00C853] text-white text-xs font-medium shadow-[0_0_18px_rgba(0,200,83,0.6)]">Use my location</button>
          </div>
          <div className="h-72 sm:h-80 lg:h-[26rem] w-full">
            <iframe
              title="Map"
              className="w-full h-full border-0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1357%2C51.495%2C-0.11%2C51.505&layer=mapnik"
              allowFullScreen
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex gap-3">
            <button className="flex-1 px-4 py-3 rounded-xl bg-white/80 dark:bg-neutral-800/80 border border-white/20 dark:border-white/10 text-sm text-neutral-900 dark:text-neutral-100 flex items-center justify-center gap-2">
              <Navigation size={16} /> Navigate
            </button>
            <button className="flex-1 px-4 py-3 rounded-xl bg-[#00C853] text-white text-sm font-medium shadow-[0_0_26px_rgba(0,200,83,0.6)]">Scan QR</button>
          </div>
        </div>

        {/* History */}
        <div className="rounded-2xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <History size={18} className="text-[#00E5FF]" />
              <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">Recent Recycling</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400">
              <Clock size={14} /> Updated now
            </div>
          </div>
          <div className="px-4 divide-y divide-white/30 dark:divide-white/10">
            <HistoryItem date="Today, 09:24" material="Aluminum Cans • 1.2kg" reward={120} />
            <HistoryItem date="Yesterday, 18:02" material="PET Plastics • 0.8kg" reward={80} />
            <HistoryItem date="Tue, 14:17" material="Glass Bottles • 2.0kg" reward={160} />
            <HistoryItem date="Mon, 20:33" material="Cardboard • 1.5kg" reward={90} />
          </div>
          <div className="p-4">
            <button className="w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-neutral-800/70 border border-white/20 dark:border-white/10 text-sm text-neutral-900 dark:text-neutral-100">View full history</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapAndHistory;
