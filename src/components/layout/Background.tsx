/**
 * Fondo ambiente global: base del tema + glows violeta/azul/celeste.
 */
export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-page" />
      <div className="absolute -top-[15%] left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent-violet/15 blur-[140px] dark:bg-accent-violet/25" />
      <div className="absolute -right-[10%] top-[30%] h-[32rem] w-[32rem] rounded-full bg-accent-blue/10 blur-[140px] dark:bg-accent-blue/15" />
      <div className="absolute -left-[10%] bottom-[-10%] h-[30rem] w-[30rem] rounded-full bg-accent-celeste/10 blur-[140px] dark:bg-accent-celeste/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--page)_78%)]" />
    </div>
  )
}
