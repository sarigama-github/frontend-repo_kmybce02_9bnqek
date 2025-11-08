import React from 'react';
import SafeSpline from './SafeSpline';
import { QrCode, Camera, MapPin } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative h-[56vh] sm:h-[64vh] lg:h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <SafeSpline scene="https://prod.spline.design/2NqhK2L3rZpH8yM7/scene.splinecode" />
      </div>

      {/* Glass CTA panel */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full sm:max-w-md rounded-2xl p-6 sm:p-8 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-700 dark:text-neutral-300 mb-2">Smart City • 2025</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-neutral-900 dark:text-white">
              Recycle smarter. Earn instantly.
            </h1>
            <p className="mt-3 text-neutral-700/90 dark:text-neutral-300/90">
              Drop recyclables into any SmartBin. Our AI verifies materials and converts them into eco-points you can cash out.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 dark:bg-neutral-800/60 border border-white/20 dark:border-white/10">
                <QrCode size={18} className="text-[#00E5FF]" />
                <span className="text-sm text-neutral-800 dark:text-neutral-200">AI Scan</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 dark:bg-neutral-800/60 border border-white/20 dark:border-white/10">
                <MapPin size={18} className="text-[#00C853]" />
                <span className="text-sm text-neutral-800 dark:text-neutral-200">Nearby</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 dark:bg-neutral-800/60 border border-white/20 dark:border-white/10">
                <Camera size={18} className="text-[#00C853]" />
                <span className="text-sm text-neutral-800 dark:text-neutral-200">Verify</span>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="px-4 py-3 rounded-xl bg-[#00C853] text-white font-medium shadow-[0_0_30px_rgba(0,200,83,0.6)] hover:shadow-[0_0_40px_rgba(0,200,83,0.85)] transition">
                Find a SmartBin
              </button>
              <button className="px-4 py-3 rounded-xl bg-white/70 dark:bg-neutral-800/70 text-neutral-900 dark:text-neutral-100 font-medium border border-white/20 dark:border-white/10">
                Scan QR to Deposit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Accent gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-[#00C853]/40 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-[#00E5FF]/40 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero3D;
