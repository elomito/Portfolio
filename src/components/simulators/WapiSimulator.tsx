import React, { useState, useEffect } from 'react';
import { Play, Pause, Send, CheckCircle2, Heart, Volume2 } from 'lucide-react';

interface ChatMsg {
  id: string;
  sender: string;
  text: string;
  isTip?: boolean;
  tipAmount?: number;
}

export const WapiSimulator: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [chat, setChat] = useState<ChatMsg[]>([
    { id: '1', sender: 'Amina_K', text: 'Live from Kisumu! Latency is so crisp today 🔥' },
    { id: '2', sender: 'BrianTech', text: 'WebRTC pipeline working seamlessly over 4G' },
    { id: '3', sender: 'Wanjiku_Dev', text: 'That UI transition was smooth!' },
  ]);
  const [newMsg, setNewMsg] = useState('');
  const [tipAmount, setTipAmount] = useState<number>(100);
  const [phoneNumber, setPhoneNumber] = useState('0712345678');
  const [tipState, setTipState] = useState<'idle' | 'sending' | 'pin_prompt' | 'success'>('idle');
  const [activeBanner, setActiveBanner] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPlaying) return;
      const sampleNames = ['Otieno_G', 'Grace_N', 'Kibet_254', 'Njeri_L'];
      const sampleTexts = [
        'Greetings from Nairobi!',
        'Loving the live stream audio quality',
        'Can you show the smart contract logic again?',
        'Kenyan tech creators taking over 🚀',
      ];
      const randomSender = sampleNames[Math.floor(Math.random() * sampleNames.length)];
      const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
      setChat((prev) => [...prev.slice(-6), { id: Date.now().toString(), sender: randomSender, text: randomText }]);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    setChat((prev) => [
      ...prev.slice(-6),
      { id: Date.now().toString(), sender: 'You (Visitor)', text: newMsg.trim() },
    ]);
    setNewMsg('');
  };

  const handleTriggerMpesaTip = () => {
    if (tipState !== 'idle') return;
    setTipState('sending');
    setTimeout(() => {
      setTipState('pin_prompt');
      setTimeout(() => {
        setTipState('success');
        const tipMsg = `Tipped ${tipAmount} KES via M-Pesa STK Push! 🎉`;
        setActiveBanner(tipMsg);
        setChat((prev) => [
          ...prev.slice(-6),
          { id: Date.now().toString(), sender: 'M-Pesa Bot', text: tipMsg, isTip: true, tipAmount },
        ]);
        setTimeout(() => {
          setActiveBanner(null);
          setTipState('idle');
        }, 3500);
      }, 1500);
    }, 1000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-[#163973]/20 dark:border-[#2A5CB8]/30 bg-[#FAF7F2] dark:bg-[#0D1629] text-[#122444] dark:text-[#FAF7F2]">
      {/* Simulator Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#163973]/10 dark:bg-[#163973]/40 border-b border-[#163973]/15 text-xs font-medium">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold uppercase tracking-wider text-[#163973] dark:text-[#93B4F0]">
            Wapi Creator Studio · Live Simulation
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs opacity-80">
          <span>WebRTC: 240ms</span>
          <span>·</span>
          <span>1080p60 Livepeer</span>
        </div>
      </div>

      {/* Main Grid: Stream & Chat */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        {/* Stream Viewport */}
        <div className="lg:col-span-2 relative aspect-video bg-gradient-to-br from-[#0F1E38] via-[#142A4F] to-[#0A1224] flex flex-col justify-between p-4 text-white overflow-hidden">
          {/* Subtle animated background graphics */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute w-72 h-72 rounded-full bg-[#3B82F6] blur-3xl -top-10 -left-10 animate-pulse" />
            <div className="absolute w-72 h-72 rounded-full bg-[#163973] blur-3xl -bottom-10 -right-10" />
          </div>

          {/* Top Overlays */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[11px] font-bold tracking-wide uppercase bg-red-600 text-white rounded">
                LIVE
              </span>
              <span className="text-xs bg-black/40 backdrop-blur px-2 py-0.5 rounded text-white/90">
                1,420 Viewers
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-black/40 backdrop-blur px-2 py-0.5 rounded text-white/90 flex items-center gap-1">
                <Volume2 className="w-3.5 h-3.5" /> Stereo
              </span>
            </div>
          </div>

          {/* Tip Celebration Banner Overlay */}
          {activeBanner && (
            <div className="relative z-20 self-center max-w-sm w-full bg-[#00A859] text-white p-3 rounded-xl shadow-2xl flex items-center gap-3 border border-emerald-300/40 animate-bounce">
              <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider">M-Pesa Tip Received!</p>
                <p className="text-sm font-bold">{activeBanner}</p>
              </div>
            </div>
          )}

          {/* Stream Mock Center */}
          <div className="relative z-10 self-center text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF7F2]/10 backdrop-blur border border-white/20 flex items-center justify-center mb-2 shadow-inner">
              <Play className="w-8 h-8 text-[#FAF7F2] ml-1" />
            </div>
            <p className="text-sm font-semibold tracking-wide text-[#FAF7F2]">
              Interactive WebRTC Stream Feed
            </p>
            <p className="text-xs text-white/70">
              Low-latency ingest transcoding through Livepeer network
            </p>
          </div>

          {/* Bottom Stream Controls */}
          <div className="relative z-10 flex items-center justify-between text-xs bg-black/50 backdrop-blur-md px-3 py-2 rounded-lg">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-medium cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <span className="text-white/40">|</span>
              <span className="text-white/80">Bitrate: 4,800 kbps (Auto)</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
              <span>3.4k Likes</span>
            </div>
          </div>
        </div>

        {/* Live Chat & Tipping Panel */}
        <div className="flex flex-col h-full border-t lg:border-t-0 lg:border-l border-[#163973]/15 dark:border-[#2A5CB8]/20 bg-white/40 dark:bg-[#0A1120]">
          {/* Chat Header */}
          <div className="px-3 py-2 border-b border-[#163973]/10 dark:border-[#2A5CB8]/20 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#163973] dark:text-[#93B4F0]">
              Stream Chat
            </span>
            <span className="text-[11px] text-neutral-500">Realtime WebSocket</span>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-48 text-xs">
            {chat.map((msg) => (
              <div
                key={msg.id}
                className={`p-2 rounded ${
                  msg.isTip
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-950 dark:text-emerald-200'
                    : 'bg-black/5 dark:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-semibold text-[#163973] dark:text-[#93B4F0]">
                    {msg.sender}
                  </span>
                  {msg.tipAmount && (
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                      +{msg.tipAmount} KES
                    </span>
                  )}
                </div>
                <p className="opacity-90">{msg.text}</p>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="p-2 border-t border-[#163973]/10 dark:border-[#2A5CB8]/20 flex gap-1">
            <input
              type="text"
              placeholder="Send chat message..."
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              className="flex-1 px-2.5 py-1 text-xs rounded bg-white dark:bg-[#14233C] border border-[#163973]/20 dark:border-[#2A5CB8]/30 focus:outline-none focus:ring-1 focus:ring-[#163973]"
            />
            <button
              type="submit"
              className="px-2.5 py-1 bg-[#163973] text-white rounded text-xs hover:bg-[#112D5C] transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Interactive M-Pesa Tipping Widget */}
          <div className="p-3 border-t border-[#163973]/15 dark:border-[#2A5CB8]/20 bg-[#FAF7F2] dark:bg-[#101D33]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#163973] dark:text-[#FAF7F2] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00A859]" />
                M-Pesa STK Push Tip Jar
              </span>
              <span className="text-[10px] text-neutral-500 font-mono">Daraja 2.0</span>
            </div>

            {/* Tip Amount Selector */}
            <div className="grid grid-cols-4 gap-1.5 mb-2">
              {[50, 100, 250, 500].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => setTipAmount(amt)}
                  className={`py-1 text-xs font-semibold rounded border transition-all cursor-pointer ${
                    tipAmount === amt
                      ? 'bg-[#163973] text-white border-[#163973]'
                      : 'bg-white dark:bg-[#162744] text-[#122444] dark:text-[#FAF7F2] border-[#163973]/20 hover:border-[#163973]'
                  }`}
                >
                  {amt} KES
                </button>
              ))}
            </div>

            {/* Simulated Phone Input & Push Button */}
            <div className="flex gap-1.5">
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="07XX XXX XXX"
                className="w-28 px-2 py-1 text-xs rounded bg-white dark:bg-[#162744] border border-[#163973]/20 dark:border-[#2A5CB8]/30 font-mono"
              />
              <button
                type="button"
                onClick={handleTriggerMpesaTip}
                disabled={tipState !== 'idle'}
                className="flex-1 py-1 px-2.5 rounded text-xs font-bold bg-[#00A859] hover:bg-[#008f4c] text-white transition-colors flex items-center justify-center gap-1 cursor-pointer disabled:opacity-60"
              >
                {tipState === 'idle' && `Send ${tipAmount} KES`}
                {tipState === 'sending' && 'Initiating STK...'}
                {tipState === 'pin_prompt' && 'Awaiting PIN...'}
                {tipState === 'success' && 'Confirmed! ✓'}
              </button>
            </div>
            <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1.5">
              Simulates real Safaricom Daraja STK push with sub-second webhook callback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
