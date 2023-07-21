import Sidebar from "@/components/organisms/Sidebar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-screen w-full">
      <div className="flex h-full">
        <Sidebar />
        {children}
      </div>
    </section>
  );
}

export default Layout;
