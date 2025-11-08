import React from 'react';
import HeaderNav from './components/HeaderNav';
import Hero3D from './components/Hero3D';
import StatsGrid from './components/StatsGrid';
import RewardsAndLeaderboard from './components/RewardsAndLeaderboard';
import MapAndHistory from './components/MapAndHistory';

const App = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(0,200,83,0.15),transparent),radial-gradient(1200px_600px_at_90%_10%,rgba(0,229,255,0.12),transparent)] bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <HeaderNav />
      <Hero3D />
      <StatsGrid />
      <RewardsAndLeaderboard />
      <MapAndHistory />

      <footer className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-neutral-600 dark:text-neutral-400">
          Built for a cleaner, smarter city. © SmartBin 2025
        </div>
      </footer>
    </div>
  );
};

export default App;
