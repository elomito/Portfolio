import React, { useState } from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';

export const SendmeSimulator: React.FC = () => {
  const [taskStatus, setTaskStatus] = useState<'available' | 'claimed' | 'in_transit' | 'delivered'>('available');
  const [optimisticCount, setOptimisticCount] = useState<number>(1);

  const handleClaim = () => {
    // Instant optimistic transition
    setTaskStatus('claimed');
    setOptimisticCount(0);
    setTimeout(() => {
      setTaskStatus('in_transit');
    }, 1400);
  };

  const handleComplete = () => {
    setTaskStatus('delivered');
  };

  const handleReset = () => {
    setTaskStatus('available');
    setOptimisticCount(1);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-[#163973]/20 dark:border-[#2A5CB8]/30 bg-[#FAF7F2] dark:bg-[#0D1629] text-[#122444] dark:text-[#FAF7F2]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#163973]/10 dark:bg-[#163973]/40 border-b border-[#163973]/15 text-xs">
        <div className="flex items-center gap-2">
          <Navigation className="w-3.5 h-3.5 text-[#163973] dark:text-[#93B4F0]" />
          <span className="font-semibold uppercase tracking-wider text-[#163973] dark:text-[#93B4F0]">
            Sendme · Campus & Estate Hyperlocal Radar
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-neutral-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Supabase Realtime Synced</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* Simulated Map / Neighborhood Cluster */}
        <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-xl overflow-hidden bg-[#EAE2D5] dark:bg-[#08101E] border border-[#163973]/15 dark:border-[#2A5CB8]/20 flex items-center justify-center p-4">
          {/* Subtle grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#16397310_1px,transparent_1px),linear-gradient(to_bottom,#16397310_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Node 1: Pharmacy */}
          <div className="absolute top-4 left-6 sm:left-12 flex items-center gap-1.5 bg-white dark:bg-[#14233C] px-2.5 py-1 rounded shadow-sm border border-[#163973]/15 text-[11px] font-medium z-10">
            <MapPin className="w-3.5 h-3.5 text-[#163973] dark:text-[#93B4F0]" />
            <span>Campus Pharmacy (Pickup)</span>
          </div>

          {/* Node 2: Hall 4 */}
          <div className="absolute bottom-4 right-6 sm:right-12 flex items-center gap-1.5 bg-white dark:bg-[#14233C] px-2.5 py-1 rounded shadow-sm border border-[#163973]/15 text-[11px] font-medium z-10">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span>Hostel Hall 4 (Drop-off)</span>
          </div>

          {/* Animated Route Line */}
          <div className="relative w-2/3 h-0.5 bg-dashed border-b-2 border-dashed border-[#163973]/40 dark:border-[#93B4F0]/40 flex items-center justify-between">
            <span className="w-2.5 h-2.5 rounded-full bg-[#163973] -ml-1" />
            {taskStatus === 'in_transit' && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#163973] text-white animate-bounce">
                Courier Walking · 450m
              </span>
            )}
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600 -mr-1" />
          </div>
        </div>

        {/* Live Errand Request Card */}
        <div className="p-3.5 rounded-xl bg-white dark:bg-[#101D33] border border-[#163973]/15 dark:border-[#2A5CB8]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#163973] dark:text-[#93B4F0]">
                Urgent: Cold Medication & Vitamin C
              </span>
              <span className="text-[10px] bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 px-2 py-0.5 rounded font-medium">
                120 KES Reward
              </span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300">
              Requested by Amina (Room 412) · Distance: 450m · Estimated time: 8 mins
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            {taskStatus === 'available' && (
              <button
                type="button"
                onClick={handleClaim}
                className="px-3.5 py-1.5 bg-[#163973] hover:bg-[#122A54] text-white text-xs font-bold rounded-lg shadow transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <UserCheck className="w-3.5 h-3.5" />
                Claim Errand (React 19 Optimistic)
              </button>
            )}

            {taskStatus === 'claimed' && (
              <span className="text-xs font-semibold text-[#163973] dark:text-[#93B4F0] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 animate-spin" /> Claiming instantly...
              </span>
            )}

            {taskStatus === 'in_transit' && (
              <button
                type="button"
                onClick={handleComplete}
                className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Confirm Delivery & Release 120 KES
              </button>
            )}

            {taskStatus === 'delivered' && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Commission Released!
                </span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-neutral-500 hover:underline cursor-pointer"
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Real-time State Metrics */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 rounded bg-neutral-100/80 dark:bg-[#101D33]/60">
            <span className="text-neutral-500 block text-[10px]">Campus Errands</span>
            <span className="font-bold text-[#163973] dark:text-[#93B4F0] font-mono">
              {optimisticCount} Available
            </span>
          </div>
          <div className="p-2 rounded bg-neutral-100/80 dark:bg-[#101D33]/60">
            <span className="text-neutral-500 block text-[10px]">State Mechanism</span>
            <span className="font-bold text-[#163973] dark:text-[#93B4F0]">React 19 Optimistic</span>
          </div>
          <div className="p-2 rounded bg-neutral-100/80 dark:bg-[#101D33]/60">
            <span className="text-neutral-500 block text-[10px]">Realtime Backend</span>
            <span className="font-bold text-[#163973] dark:text-[#93B4F0]">Supabase Postgres</span>
          </div>
        </div>
      </div>
    </div>
  );
};
