import { type ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header>{/* your nav or header */}</header>

        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
}
