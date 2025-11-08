import React from 'react';
import { Coins, Leaf, PiggyBank } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, sub }) => (
  <div className="relative rounded-2xl p-5 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs uppercase tracking-widest text-neutral-600 dark:text-neutral-400">{label}</p>
        <p className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-white">{value}</p>
        {sub && <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{sub}</p>}
      </div>
      <div className="h-11 w-11 rounded-xl grid place-items-center bg-gradient-to-br from-[#00C853] to-[#00E5FF] text-white shadow-[0_0_30px_rgba(0,200,83,0.55)]">
        <Icon size={20} />
      </div>
    </div>
  </div>
);

const StatsGrid = () => {
  return (
    <section className="relative -mt-10 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard icon={Leaf} label="Eco Points" value="12,450" sub="+320 today" />
          <StatCard icon={PiggyBank} label="Money Earned" value="$186.40" sub="Cashout available" />
          <StatCard icon={Coins} label="CO₂ Saved" value="742 kg" sub="Top 8% this week" />
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
