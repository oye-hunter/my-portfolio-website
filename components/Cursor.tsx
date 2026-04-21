export function Cursor() {
  return (
    <div
      id="cursor"
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1001] h-4 w-4 -translate-x-1/2 -translate-y-1/2 border-2 border-[#ffb000] shadow-[0_0_8px_rgba(255,176,0,0.75)] mix-blend-screen transition-[width,height,opacity] duration-150"
    />
  );
}
