import React from 'react';
import { Leaf, Gift, Trophy, Bell, User, Settings } from 'lucide-react';

const HeaderNav = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-xl bg-white/40 dark:bg-neutral-900/40 border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-[#00C853] shadow-[0_0_30px_rgba(0,200,83,0.6)] grid place-items-center">
            <Leaf className="text-white" size={20} />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">SmartBin</p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 -mt-1">Eco • Smart • Rewards</p>
          </div>
        </div>

        {/* Quick actions */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 dark:bg-neutral-800/60 border border-white/20 dark:border-white/10 hover:bg-white/80 dark:hover:bg-neutral-800 transition">
            <Gift size={18} className="text-[#00C853]" />
            <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Rewards</span>
          </button>
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 dark:bg-neutral-800/60 border border-white/20 dark:border-white/10 hover:bg-white/80 dark:hover:bg-neutral-800 transition">
            <Trophy size={18} className="text-[#00C853]" />
            <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Leaderboard</span>
          </button>
          <button className="relative p-2 rounded-xl bg-white/60 dark:bg-neutral-800/60 border border-white/20 dark:border-white/10 hover:bg-white/80 dark:hover:bg-neutral-800 transition">
            <Bell size={18} className="text-neutral-700 dark:text-neutral-300" />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-[#00C853] shadow-[0_0_12px_rgba(0,200,83,0.8)]"></span>
          </button>
          <div className="flex items-center gap-2 pl-3 ml-2 border-l border-white/30 dark:border-white/10">
            <button className="p-2 rounded-xl bg-white/60 dark:bg-neutral-800/60 border border-white/20 dark:border-white/10 hover:bg-white/80 dark:hover:bg-neutral-800 transition">
              <Settings size={18} className="text-neutral-700 dark:text-neutral-300" />
            </button>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#00C853] to-[#00E5FF] shadow-[0_0_30px_rgba(0,200,83,0.5)] grid place-items-center ring-1 ring-white/30">
              <User size={18} className="text-white" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNav;
