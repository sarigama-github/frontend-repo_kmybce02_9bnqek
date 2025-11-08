import React from 'react';
import { Trophy, Gift, Users, ArrowRight } from 'lucide-react';

const LeaderItem = ({ rank, name, points }) => (
  <div className="flex items-center justify-between py-3">
    <div className="flex items-center gap-3">
      <div className={`h-9 w-9 rounded-xl grid place-items-center text-white ${rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-amber-500' : rank === 2 ? 'bg-gradient-to-br from-neutral-400 to-neutral-500' : 'bg-gradient-to-br from-orange-400 to-rose-500'}`}>
        <span className="text-sm font-semibold">{rank}</span>
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-900 dark:text-white">{name}</p>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">{points} pts</p>
      </div>
    </div>
    <button className="text-xs px-2.5 py-1.5 rounded-lg bg-white/70 dark:bg-neutral-800/70 border border-white/20 dark:border-white/10">Challenge</button>
  </div>
);

const RewardCard = ({ title, desc, cta }) => (
  <div className="rounded-2xl p-5 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10 flex flex-col">
    <div className="flex items-center gap-2 text-neutral-900 dark:text-white">
      <Gift size={18} className="text-[#00C853]" />
      <p className="font-medium">{title}</p>
    </div>
    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 flex-1">{desc}</p>
    <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#00C853] hover:text-[#00E5FF] transition">
      {cta} <ArrowRight size={16} />
    </button>
  </div>
);

const RewardsAndLeaderboard = () => {
  return (
    <section className="mt-10 mb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rewards */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <Gift size={18} className="text-[#00C853]" />
            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">Reward Store</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <RewardCard title="Cashout to Wallet" desc="Convert eco-points directly to your e-wallet or bank in seconds." cta="Redeem now" />
            <RewardCard title="Transport Vouchers" desc="Get city transit credits for greener commutes and more savings." cta="View options" />
            <RewardCard title="Digital Gifts" desc="Unlock subscriptions, cloud storage, and eco-brand discounts." cta="Browse gifts" />
          </div>
        </div>

        {/* Leaderboard */}
        <div className="rounded-2xl bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy size={18} className="text-[#00E5FF]" />
              <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">Leaderboard</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-neutral-600 dark:text-neutral-400">
              <Users size={14} /> 2,431 participants
            </div>
          </div>
          <div className="px-4 divide-y divide-white/30 dark:divide-white/10">
            <LeaderItem rank={1} name="Ava" points={32650} />
            <LeaderItem rank={2} name="Noah" points={29840} />
            <LeaderItem rank={3} name="Mila" points={27410} />
          </div>
          <div className="p-4">
            <button className="w-full px-4 py-2.5 rounded-xl bg-white/70 dark:bg-neutral-800/70 border border-white/20 dark:border-white/10 text-sm text-neutral-900 dark:text-neutral-100">View all</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsAndLeaderboard;
