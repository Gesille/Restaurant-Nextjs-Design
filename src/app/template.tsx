import type { ReactNode } from "react";

/** Re-mounts on every navigation, so the page fade-in plays on each route change. */
export default function Template({ children }: { children: ReactNode }) {
  return <main className="page-transition">{children}</main>;
}
