export function Cursor() {
  return (
    <div
      id="cursor"
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[3000] hidden md:flex h-4.5 w-4.5 -translate-x-1/2 -translate-y-1/2 border-2 border-[#ffb000] shadow-[0_0_10px_rgba(255,176,0,0.85)] mix-blend-screen transition-[width,height,opacity] duration-150 items-center justify-center"
    >
      {/* Centered Glowing Dot inside Retro Square Cursor */}
      <div className="h-1 w-1 bg-[#39ff14] rounded-full shadow-[0_0_6px_#39ff14]" />
    </div>
  );
}
