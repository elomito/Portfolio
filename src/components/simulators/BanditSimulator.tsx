import React, { useState } from 'react';
import { Terminal, Shield, CornerDownLeft, Sparkles } from 'lucide-react';

interface TerminalLine {
  id: string;
  type: 'command' | 'output' | 'error' | 'success';
  text: string;
}

export const BanditSimulator: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { id: '1', type: 'output', text: 'Bandit Password Saver CLI v1.2.0 (Forensics & CTF Credential Vault)' },
    { id: '2', type: 'output', text: 'Authenticated via Google OAuth 2.0 -> Linked to secure cloud sheet.' },
    { id: '3', type: 'output', text: 'Type "help" or click one of the quick commands below to test.' },
  ]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const newLines: TerminalLine[] = [
      ...history,
      { id: Date.now().toString() + '-cmd', type: 'command', text: `$ ${trimmed}` },
    ];

    if (trimmed === 'help') {
      newLines.push({
        id: Date.now().toString() + '-res',
        type: 'output',
        text: `Available commands:
  bandit --list                   List all recorded levels in Google Sheet
  bandit --get --level <num>       Retrieve credential for specific Bandit level
  bandit --add --level <n> --pass <secret> Store new level password
  clear                           Clear terminal display`,
      });
    } else if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (trimmed.includes('--list')) {
      newLines.push({
        id: Date.now().toString() + '-res',
        type: 'success',
        text: `[Google Sheets API Sync] 4 saved credentials found:
  [Level 00] -> bandit0 (default)
  [Level 01] -> NH2SXNWNeUaE2YcvenYGrDaKaoMVeNN2
  [Level 14] -> fGrKUxLFV6vBUtBdaVhnqpBuqgrfo6ef
  [Level 15] -> jN2kgmUng36fTxTr6KNflmIOrnUAWW6R`,
      });
    } else if (trimmed.includes('--get') && trimmed.includes('14')) {
      newLines.push({
        id: Date.now().toString() + '-res',
        type: 'success',
        text: `[Google Sheets API] Level 14 Password Retrieved:
  >>> fGrKUxLFV6vBUtBdaVhnqpBuqgrfo6ef
  Copied to system buffer. Ready to SSH into bandit14@bandit.labs.overthewire.org`,
      });
    } else if (trimmed.includes('--add')) {
      newLines.push({
        id: Date.now().toString() + '-res',
        type: 'success',
        text: `[Google Sheets API] Successfully appended row to target vault spreadsheet!
  Authenticated User: omitolizatieno@gmail.com
  Integrity Check: SHA-256 HMAC valid`,
      });
    } else {
      newLines.push({
        id: Date.now().toString() + '-res',
        type: 'output',
        text: `Executed: "${trimmed}". For interactive demo, try: bandit --get --level 14 or bandit --list`,
      });
    }

    setHistory(newLines.slice(-12));
    setInputVal('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-[#163973]/20 dark:border-[#2A5CB8]/30 bg-[#0B132B] text-neutral-200 font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#070D1F] border-b border-[#163973]/30">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] text-neutral-400 font-mono ml-2 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-[#93B4F0]" />
            elizabeth@zone01-devbox: ~/bandit-vault
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <Shield className="w-3 h-3" />
          <span>OAuth 2.0 PKCE</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 space-y-2 min-h-48 max-h-60 overflow-y-auto leading-relaxed">
        {history.map((line) => (
          <div
            key={line.id}
            className={`whitespace-pre-wrap ${
              line.type === 'command'
                ? 'text-amber-400 font-bold'
                : line.type === 'success'
                ? 'text-emerald-400'
                : line.type === 'error'
                ? 'text-red-400'
                : 'text-neutral-300'
            }`}
          >
            {line.text}
          </div>
        ))}
      </div>

      {/* Quick Run Buttons */}
      <div className="px-4 py-2 bg-[#08101E] border-t border-[#163973]/30 flex flex-wrap items-center gap-2">
        <span className="text-[10px] text-neutral-500 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-400" />
          Quick Exec:
        </span>
        <button
          type="button"
          onClick={() => handleCommand('bandit --get --level 14')}
          className="px-2 py-0.5 rounded bg-[#162744] hover:bg-[#1f3863] text-[11px] text-neutral-200 transition-colors border border-blue-500/30 cursor-pointer"
        >
          bandit --get --level 14
        </button>
        <button
          type="button"
          onClick={() => handleCommand('bandit --list')}
          className="px-2 py-0.5 rounded bg-[#162744] hover:bg-[#1f3863] text-[11px] text-neutral-200 transition-colors border border-blue-500/30 cursor-pointer"
        >
          bandit --list
        </button>
        <button
          type="button"
          onClick={() => handleCommand('bandit --add --level 16 --pass 7x9...')}
          className="px-2 py-0.5 rounded bg-[#162744] hover:bg-[#1f3863] text-[11px] text-neutral-200 transition-colors border border-blue-500/30 cursor-pointer"
        >
          bandit --add
        </button>
      </div>

      {/* Input Line */}
      <form onSubmit={handleFormSubmit} className="flex items-center px-4 py-2.5 bg-[#070D1F] border-t border-[#163973]/30">
        <span className="text-emerald-400 mr-2 font-bold">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help' or command..."
          className="flex-1 bg-transparent text-white focus:outline-none text-xs font-mono"
        />
        <button type="submit" className="text-neutral-400 hover:text-white transition-colors cursor-pointer">
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
