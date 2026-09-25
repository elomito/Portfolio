import React, { useState } from 'react';
import { ShieldCheck, Zap, ArrowRight, RotateCcw, CheckCircle2, Lock, KeyRound } from 'lucide-react';

interface EscrowStep {
  id: number;
  title: string;
  role: string;
  detail: string;
  hash: string;
  status: 'completed' | 'current' | 'pending';
}

export const ProperSatsSimulator: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const totalSats = 2450000; // ~0.0245 BTC equivalent land deposit milestone

  const steps: EscrowStep[] = [
    {
      id: 1,
      title: 'Lightning Hold Invoice Funded',
      role: 'Buyer (Deposit Lock)',
      detail: 'Buyer locks 2,450,000 SATs into non-custodial LND hold invoice. Payment hash committed.',
      hash: '9f83c...4a2b (SHA-256 Hold Hash)',
      status: currentStepIndex > 0 ? 'completed' : currentStepIndex === 0 ? 'current' : 'pending',
    },
    {
      id: 2,
      title: 'Surveyor Field Coordinates Verified',
      role: 'Licensed Surveyor',
      detail: 'GPS beacon coordinates (-0.0917, 34.7680) validated on-site. Survey report signed.',
      hash: 'e3b0c...817a (Cadastral Signature)',
      status: currentStepIndex > 1 ? 'completed' : currentStepIndex === 1 ? 'current' : 'pending',
    },
    {
      id: 3,
      title: 'Legal Search & Title Verification',
      role: 'Conveyancing Attorney',
      detail: 'Ministry of Lands green card verified against counterparty title deed registry.',
      hash: '7d21a...99ce (Bar Association Attestation)',
      status: currentStepIndex > 2 ? 'completed' : currentStepIndex === 2 ? 'current' : 'pending',
    },
    {
      id: 4,
      title: 'Registry Transfer Endorsement',
      role: 'Land Registry Office',
      detail: 'Stamp duty committed, official title transfer certificate logged with forensic integrity.',
      hash: '55bc1...12ff (Registry Seal)',
      status: currentStepIndex > 3 ? 'completed' : currentStepIndex === 3 ? 'current' : 'pending',
    },
    {
      id: 5,
      title: 'Preimage Revealed & Settlement Disbursed',
      role: 'Automated Lightning Daemon',
      detail: 'Milestone preimage revealed! Instant sats split: Seller (92%), Surveyor (5%), Legal (3%).',
      hash: 'PREIMAGE: b7e8a9...31f0 (Channel Settled)',
      status: currentStepIndex >= 4 ? 'completed' : 'pending',
    },
  ];

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-[#163973]/20 dark:border-[#2A5CB8]/30 bg-[#FAF7F2] dark:bg-[#0D1629] text-[#122444] dark:text-[#FAF7F2]">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#163973]/10 dark:bg-[#163973]/40 border-b border-[#163973]/15">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="font-semibold text-xs tracking-wider uppercase text-[#163973] dark:text-[#93B4F0]">
            ProperSats · Bitcoin Lightning Escrow Engine
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono font-medium">
          <span className="text-neutral-500 dark:text-neutral-400">Escrow Vault:</span>
          <span className="text-[#163973] dark:text-[#E2D9CB] font-bold">
            {totalSats.toLocaleString()} SATS (~0.0245 BTC)
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        {/* Progress Tracker */}
        <div className="grid grid-cols-5 gap-2">
          {steps.map((step, idx) => (
            <div key={step.id} className="flex flex-col gap-1">
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  step.status === 'completed'
                    ? 'bg-emerald-600 dark:bg-emerald-500'
                    : step.status === 'current'
                    ? 'bg-[#163973] dark:bg-[#5287E8] animate-pulse'
                    : 'bg-neutral-300 dark:bg-neutral-700'
                }`}
              />
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate">
                Step {idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Current Active Step Card */}
        <div className="p-4 rounded-xl border border-[#163973]/15 dark:border-[#2A5CB8]/20 bg-white dark:bg-[#101D33] shadow-sm">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                {currentStepIndex === 4 ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Lock className="w-4 h-4 text-[#163973] dark:text-[#93B4F0]" />
                )}
                <span className="text-xs font-bold uppercase tracking-wider text-[#163973] dark:text-[#93B4F0]">
                  {steps[currentStepIndex].role}
                </span>
              </div>
              <h4 className="text-base font-bold text-[#122444] dark:text-[#FAF7F2]">
                {steps[currentStepIndex].title}
              </h4>
            </div>
            <span
              className={`text-xs px-2.5 py-1 rounded font-medium ${
                currentStepIndex === 4
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                  : 'bg-blue-50 text-[#163973] dark:bg-[#162744] dark:text-[#93B4F0]'
              }`}
            >
              {currentStepIndex === 4 ? 'Milestone Settled' : 'In Progress'}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
            {steps[currentStepIndex].detail}
          </p>

          <div className="p-2.5 rounded bg-neutral-100 dark:bg-[#0A1120] font-mono text-[11px] text-neutral-700 dark:text-neutral-300 flex items-center justify-between">
            <span className="text-neutral-500">Cryptographic Proof:</span>
            <span className="font-semibold truncate max-w-[200px] sm:max-w-xs">
              {steps[currentStepIndex].hash}
            </span>
          </div>
        </div>

        {/* Milestone Payout Breakdown (when completed) */}
        {currentStepIndex === 4 && (
          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-900 dark:text-emerald-200">
            <div className="font-bold mb-1 flex items-center gap-1.5">
              <KeyRound className="w-3.5 h-3.5" />
              Automated Lightning Channel Distribution Executed
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2 font-mono text-[11px]">
              <div>
                <span className="text-neutral-500 block">Seller Net:</span>
                <span className="font-bold">2,254,000 SATs</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Surveyor Fee:</span>
                <span className="font-bold">122,500 SATs</span>
              </div>
              <div>
                <span className="text-neutral-500 block">Legal & Registry:</span>
                <span className="font-bold">73,500 SATs</span>
              </div>
            </div>
          </div>
        )}

        {/* Simulation Controls */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-[#163973] dark:hover:text-[#FAF7F2] transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Restart Verification Flow
          </button>

          {currentStepIndex < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 px-4 py-2 bg-[#163973] hover:bg-[#122A54] text-white rounded-lg text-xs font-semibold shadow transition-all cursor-pointer"
            >
              Sign & Advance Milestone
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              All 5 Counterparty Milestones Cryptographically Sealed
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
