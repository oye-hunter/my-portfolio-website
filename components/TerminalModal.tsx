"use client";

import { useEffect, useRef, useState } from "react";
import { contact, identity, projects, skills } from "./portfolio-data";

type TerminalModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onReboot?: () => void;
};

type HistoryEntry = {
  command: string;
  output: string | React.ReactNode;
};

export function TerminalModal({ isOpen, onClose, onReboot }: TerminalModalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "sys_init",
      output: (
        <div className="space-y-1">
          <p className="text-[#39ff14] font-bold">Matrix CRT Interactive Terminal v1.1.0</p>
          <p className="text-[#b07800]">
            Type <span className="text-[#ffb000]">&apos;help&apos;</span> for commands or{" "}
            <span className="text-[#ffb000]">&apos;exit&apos;</span> to close.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1.5 text-[#b07800]">
            <p className="text-[#ffb000] font-semibold border-b border-[#3a2a00] pb-1">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1">
              <p><span className="text-[#39ff14]">about</span> - Developer profile & role</p>
              <p><span className="text-[#39ff14]">projects</span> - Featured SaaS & Mobile apps</p>
              <p><span className="text-[#39ff14]">skills</span> - Full tech stack breakdown</p>
              <p><span className="text-[#39ff14]">contact</span> - Direct contact channels</p>
              <p><span className="text-[#39ff14]">cat resume</span> - View / Download CV</p>
              <p><span className="text-[#39ff14]">reboot</span> - Replay BIOS boot sequence</p>
              <p><span className="text-[#39ff14]">clear</span> - Clear terminal window</p>
              <p><span className="text-[#39ff14]">exit</span> - Close terminal modal</p>
            </div>
          </div>
        );
        break;
      case "about":
        output = (
          <div className="space-y-1 border-l-2 border-[#ffb000] pl-3 py-1 text-[#b07800]">
            <p className="text-[#ffb000] font-bold text-[0.92rem]">{identity.name}</p>
            <p>{identity.role} — {identity.specialization}</p>
            <p>Experience: {identity.experience} | Current: {identity.currentRole}</p>
            <p>Location: {identity.location}</p>
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="space-y-2 py-1">
            {projects.slice(0, 6).map((p) => (
              <div key={p.id} className="border-l-2 border-[#39ff14] pl-3">
                <p className="text-[#ffb000] font-bold">{p.name} <span className="text-xs text-[#b07800]">[{p.stack.join(", ")}]</span></p>
                <p className="text-xs text-[#b07800]">{p.summary}</p>
              </div>
            ))}
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-1">
            {skills.map((group) => (
              <div key={group.title} className="border border-[#3a2a00] p-2 bg-[#0a0800]">
                <p className="text-[#39ff14] text-xs font-bold">// {group.title}</p>
                <p className="text-xs text-[#b07800] mt-1">{group.items.map((i) => i.label).join(" • ")}</p>
              </div>
            ))}
          </div>
        );
        break;
      case "contact":
        output = (
          <div className="space-y-1 py-1 text-[#b07800]">
            <p>Email: <span className="text-[#ffb000] font-mono">{contact.email}</span></p>
            <p>GitHub: <a href={contact.github} target="_blank" rel="noreferrer" className="text-[#39ff14] hover:underline">{contact.github}</a></p>
            <p>LinkedIn: <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-[#39ff14] hover:underline">{contact.linkedin}</a></p>
          </div>
        );
        break;
      case "cat resume":
        output = `Opening ${contact.resume}...`;
        window.open(contact.resume, "_blank");
        break;
      case "reboot":
      case "boot":
        output = "Initiating system reboot...";
        if (onReboot) {
          onClose();
          onReboot();
        }
        break;
      case "clear":
        setHistory([]);
        return;
      case "exit":
        onClose();
        return;
      case "":
        output = "";
        break;
      default:
        output = `Command not recognized: '${trimmed}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="CRT Interactive Terminal"
      className="fixed inset-0 z-[1100] flex items-center justify-center bg-[#0a0800]/85 backdrop-blur-md p-4 animate-[crtFadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl border-2 border-[#b07800] bg-[#0f0c00] p-6 shadow-[0_0_35px_rgba(255,176,0,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="mb-4 flex items-center justify-between border-b border-[#3a2a00] pb-3">
          <div className="font-[var(--font-mono)] text-xs tracking-[0.2em] text-[#39ff14] flex items-center gap-2">
            <span>● ● ● CRT_INTERACTIVE_TERMINAL</span>
            <span className="animate-pulse text-[0.65rem] bg-[#39ff14]/10 border border-[#39ff14] px-1.5 py-0.5">READY</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Terminal"
            className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-[#b07800] transition-colors hover:text-[#ffb000]"
          >
            [ ESC / CLOSE ]
          </button>
        </div>

        {/* Refined Terminal Output Box with CRT Styled Scrollbar */}
        <div className="crt-scrollbar max-h-[50vh] overflow-y-auto pr-3 space-y-3 font-[var(--font-mono)] text-[0.85rem]">
          {history.map((entry, idx) => (
            <div key={idx} className="space-y-1">
              {entry.command && (
                <div className="flex items-center gap-2">
                  <span className="text-[#39ff14] font-bold">$</span>
                  <span className="text-[#ffb000]">{entry.command}</span>
                </div>
              )}
              {entry.output && <div className="pl-4">{entry.output}</div>}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Line Input */}
        <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2 border-t border-[#3a2a00] pt-3">
          <span className="text-[#39ff14] font-bold text-sm">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type command (e.g. help, reboot, projects)..."
            aria-label="Terminal command input"
            className="w-full bg-transparent font-[var(--font-mono)] text-[0.85rem] text-[#ffb000] outline-none placeholder:text-[#3a2a00]"
          />
          <span className="animate-pulse text-[#39ff14] text-xs">█</span>
        </form>
      </div>
    </div>
  );
}
