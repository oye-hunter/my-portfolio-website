"use client";

import { useEffect, useRef, useState } from "react";
import { contact, education, identity, projects, skills } from "./portfolio-data";

type TerminalModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onReboot?: () => void;
};

type HistoryEntry = {
  command: string;
  output: string | React.ReactNode;
};

type GameState = {
  active: boolean;
  step: number;
  score: number;
};

const QUIZ_QUESTIONS = [
  {
    q: "Q1 // Which library did Hassan use at Komatsu Pakistan Soft to eliminate full table re-rendering issues?",
    options: ["1) Ag-Grid", "2) TanStack Table", "3) DataTables.js"],
    correct: 2,
    explanation: "TanStack Table was optimized to isolate row-level state updates and reduce redundant re-renders."
  },
  {
    q: "Q2 // What AI model engine powers the sub-400ms KYC risk evaluation agent in Parakh?",
    options: ["1) Groq AI (LLaMA)", "2) Claude 3.5 Sonnet", "3) BERT Classifier"],
    correct: 1,
    explanation: "Groq LPU hardware acceleration powers instantaneous risk evaluations with explainable reasoning."
  },
  {
    q: "Q3 // Which multi-lingual LLM parses English, Urdu, and Roman Urdu in the Servis AI agent pipeline?",
    options: ["1) Whisper", "2) Gemini LLM", "3) DeepL"],
    correct: 2,
    explanation: "Gemini LLM powers the multi-agent TypeScript intent extraction and provider ranking pipeline."
  }
];

export function TerminalModal({ isOpen, onClose, onReboot }: TerminalModalProps) {
  const [input, setInput] = useState("");
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "sys_init",
      output: (
        <div className="space-y-1">
          <p className="text-[#39ff14] font-bold">Matrix CRT Interactive Terminal v2.0.0</p>
          <p className="text-[#b07800]">
            Type <span className="text-[#ffb000]">&apos;help&apos;</span> for commands,{" "}
            <span className="text-[#ffb000]">&apos;game&apos;</span> for Cyber Hacker challenge, or{" "}
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

    // Handle Active Mini-Game Session Inputs
    if (gameState?.active) {
      if (trimmed === "quit" || trimmed === "exit") {
        setGameState(null);
        setHistory((prev) => [
          ...prev,
          { command: cmdStr, output: <p className="text-[#b07800]">{`// Cyber Hacker Challenge terminated.`}</p> }
        ]);
        return;
      }

      const answerNum = parseInt(trimmed, 10);
      if (isNaN(answerNum) || answerNum < 1 || answerNum > 3) {
        setHistory((prev) => [
          ...prev,
          { command: cmdStr, output: <p className="text-[#ffb000]">Invalid input. Enter 1, 2, or 3 (or &apos;quit&apos; to abort):</p> }
        ]);
        return;
      }

      const currentQ = QUIZ_QUESTIONS[gameState.step];
      const isCorrect = answerNum === currentQ.correct;
      const newScore = isCorrect ? gameState.score + 1 : gameState.score;
      const nextStep = gameState.step + 1;

      const feedback = (
        <div className="space-y-1">
          <p className={isCorrect ? "text-[#39ff14] font-bold" : "text-[#ff4444] font-bold"}>
            {isCorrect ? "✓ CORRECT IDENTIFICATION" : `✗ INCORRECT. Correct answer was ${currentQ.correct}`}
          </p>
          <p className="text-xs text-[#b07800]">{currentQ.explanation}</p>
        </div>
      );

      if (nextStep < QUIZ_QUESTIONS.length) {
        setGameState({ active: true, step: nextStep, score: newScore });
        const nextQ = QUIZ_QUESTIONS[nextStep];
        setHistory((prev) => [
          ...prev,
          { command: cmdStr, output: feedback },
          {
            command: `game_step_${nextStep + 1}`,
            output: (
              <div className="space-y-1 text-[#b07800]">
                <p className="text-[#ffb000] font-bold">{nextQ.q}</p>
                {nextQ.options.map((opt) => (
                  <p key={opt} className="pl-3">{opt}</p>
                ))}
                <p className="text-xs text-[#39ff14] pt-1">&gt; Enter choice [1-3]:</p>
              </div>
            )
          }
        ]);
      } else {
        // Game Completed
        setGameState(null);
        const finalPercent = Math.round((newScore / QUIZ_QUESTIONS.length) * 100);
        setHistory((prev) => [
          ...prev,
          { command: cmdStr, output: feedback },
          {
            command: "game_complete",
            output: (
              <div className="border-2 border-[#39ff14] bg-[#39ff14]/10 p-4 space-y-2 font-[var(--font-mono)] my-2">
                <p className="text-[#39ff14] font-bold text-sm tracking-widest">
                  [ HACKER DECRYPTED ACCESS GRANTED ]
                </p>
                <p className="text-[#ffb000]">
                  FINAL SCORE: {newScore} / {QUIZ_QUESTIONS.length} ({finalPercent}%)
                </p>
                <p className="text-xs text-[#b07800]">
                  {finalPercent === 100
                    ? "★ PERFECT CLEAR! Full-Stack & AI Architecture Mastery verified."
                    : "Terminal decrypted successfully."}
                </p>
                <div className="border-t border-[#39ff14]/40 pt-2 text-[0.7rem] text-[#39ff14]">
                  DECRYPTION KEY: HASSAN_DEV_2026 // TYPE &apos;help&apos; TO RESUME
                </div>
              </div>
            )
          }
        ]);
      }
      return;
    }

    // Standard Terminal Command Handler
    let output: React.ReactNode = "";

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1.5 text-[#b07800]">
            <p className="text-[#ffb000] font-semibold border-b border-[#3a2a00] pb-1">{`AVAILABLE COMMANDS:`}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1">
              <p><span className="text-[#39ff14]">about</span> - Developer profile & experience</p>
              <p><span className="text-[#39ff14]">projects</span> - List 12 featured production apps</p>
              <p><span className="text-[#39ff14]">skills</span> - Full tech stack & AI models</p>
              <p><span className="text-[#39ff14]">education</span> - University degree details</p>
              <p><span className="text-[#39ff14]">game</span> - Play Retro Cyber Hacker Quiz</p>
              <p><span className="text-[#39ff14]">contact</span> - Direct phone & email channels</p>
              <p><span className="text-[#39ff14]">cat resume</span> - View / Download PDF CV</p>
              <p><span className="text-[#39ff14]">reboot</span> - Replay BIOS boot sequence</p>
              <p><span className="text-[#39ff14]">clear</span> - Clear terminal window</p>
              <p><span className="text-[#39ff14]">exit</span> - Close terminal modal</p>
            </div>
          </div>
        );
        break;

      case "game":
      case "play":
      case "matrix":
      case "trivia":
        setGameState({ active: true, step: 0, score: 0 });
        const firstQ = QUIZ_QUESTIONS[0];
        output = (
          <div className="space-y-2 border border-[#39ff14] p-3 bg-[#0a0800]">
            <div className="text-xs font-bold text-[#39ff14] uppercase tracking-widest border-b border-[#3a2a00] pb-1">
              {`// CYBER HACKER DECRYPTION CHALLENGE`}
            </div>
            <p className="text-[#ffb000] font-bold">{firstQ.q}</p>
            {firstQ.options.map((opt) => (
              <p key={opt} className="pl-3 text-[#b07800]">{opt}</p>
            ))}
            <p className="text-xs text-[#39ff14] pt-1">&gt; Enter choice [1-3] or &apos;quit&apos; to exit:</p>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="space-y-1 border-l-2 border-[#ffb000] pl-3 py-1 text-[#b07800]">
            <p className="text-[#ffb000] font-bold text-[0.92rem]">{identity.name}</p>
            <p>{identity.role} — {identity.specialization}</p>
            <p>Current: <span className="text-[#39ff14]">{identity.currentRole}</span></p>
            <p>Experience: {identity.experience} | Location: {identity.location}</p>
            <p>Phone: {identity.phone} | Availability: {identity.availability}</p>
          </div>
        );
        break;

      case "education":
        output = (
          <div className="space-y-1 border-l-2 border-[#39ff14] pl-3 py-1 text-[#b07800]">
            <p className="text-[#ffb000] font-bold">{education.degree}</p>
            <p>{education.institution} ({education.location})</p>
            <p className="text-xs text-[#39ff14]">{education.duration}</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2.5 py-1">
            {projects.map((p) => (
              <div key={p.id} className="border-l-2 border-[#39ff14] pl-3">
                <p className="text-[#ffb000] font-bold">
                  {p.id}. {p.name} <span className="text-xs text-[#b07800]">[{p.stack.join(", ")}]</span>
                </p>
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
                <p className="text-[#39ff14] text-xs font-bold">{`// ${group.title}`}</p>
                <p className="text-xs text-[#b07800] mt-1">{group.items.map((i) => i.label).join(" • ")}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 py-1 text-[#b07800]">
            <p>Phone: <span className="text-[#ffb000] font-mono">{contact.phone}</span></p>
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
        setGameState(null);
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

  const quickCommands = ["help", "game", "about", "projects", "skills", "education", "contact", "clear", "exit"];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="CRT Interactive Terminal"
      className="fixed inset-0 z-[1100] flex items-center justify-center bg-[#0a0800]/88 backdrop-blur-md p-2.5 sm:p-4 md:p-6 animate-[crtFadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl border-2 border-[#b07800] bg-[#0f0c00] p-4 sm:p-6 shadow-[0_0_35px_rgba(255,176,0,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="mb-3 sm:mb-4 flex items-center justify-between border-b border-[#3a2a00] pb-2 sm:pb-3">
          <div className="font-[var(--font-mono)] text-[0.7rem] sm:text-xs tracking-[0.2em] text-[#39ff14] flex items-center gap-2">
            <span>● ● ● CRT_TERMINAL_V2</span>
            {gameState?.active ? (
              <span className="animate-pulse text-[0.6rem] sm:text-[0.65rem] bg-[#ffb000]/15 border border-[#ffb000] px-1.5 py-0.5 text-[#ffb000]">GAME_ACTIVE</span>
            ) : (
              <span className="animate-pulse text-[0.6rem] sm:text-[0.65rem] bg-[#39ff14]/10 border border-[#39ff14] px-1.5 py-0.5">READY</span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close Terminal"
            className="font-[var(--font-mono)] text-[0.7rem] sm:text-xs uppercase tracking-widest text-[#b07800] transition-colors hover:text-[#ffb000] min-h-[38px] px-2 cursor-pointer md:cursor-none"
          >
            [ ESC / CLOSE ]
          </button>
        </div>

        {/* Refined Terminal Output Box with CRT Styled Scrollbar */}
        <div className="crt-scrollbar max-h-[45vh] sm:max-h-[50vh] overflow-y-auto pr-2 space-y-3 font-[var(--font-mono)] text-[0.8rem] sm:text-[0.85rem]">
          {history.map((entry, idx) => (
            <div key={idx} className="space-y-1">
              {entry.command && (
                <div className="flex items-center gap-2">
                  <span className="text-[#39ff14] font-bold">$</span>
                  <span className="text-[#ffb000]">{entry.command}</span>
                </div>
              )}
              {entry.output && <div className="pl-3 sm:pl-4">{entry.output}</div>}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Mobile Quick Action Command Pills */}
        <div className="mt-3 flex overflow-x-auto crt-scrollbar gap-1.5 pt-1 pb-1">
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className={`shrink-0 border px-2.5 py-1 font-[var(--font-mono)] text-[0.68rem] uppercase tracking-wider transition-all min-h-[36px] flex items-center justify-center cursor-pointer md:cursor-none ${
                cmd === "game"
                  ? "border-[#39ff14] bg-[#39ff14]/10 text-[#39ff14] font-bold"
                  : "border-[#3a2a00] bg-[#0a0800] text-[#b07800] hover:text-[#ffb000]"
              }`}
            >
              [{cmd}]
            </button>
          ))}
        </div>

        {/* Command Line Input */}
        <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-2 border-t border-[#3a2a00] pt-3">
          <span className="text-[#39ff14] font-bold text-sm">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={gameState?.active ? "enter answer [1-3] or 'quit'..." : "type command (e.g. game, help, projects, education)..."}
            aria-label="Terminal command input"
            className="w-full bg-transparent font-[var(--font-mono)] text-[1rem] sm:text-[0.85rem] text-[#ffb000] outline-none placeholder:text-[#3a2a00] min-h-[40px] cursor-pointer md:cursor-none"
          />
          <span className="animate-pulse text-[#39ff14] text-xs">█</span>
        </form>
      </div>
    </div>
  );
}
