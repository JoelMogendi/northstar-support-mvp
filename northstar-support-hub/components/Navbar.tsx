"use client";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <a href="/" className="font-bold text-xl">
          Northstar Hub
        </a>
        <div className="flex gap-4">
          <a href="/">
            <Button variant="ghost" size="sm">Home</Button>
          </a>
          <a href="/order-status">
            <Button variant="ghost" size="sm">Orders</Button>
          </a>
          <a href="/returns">
            <Button variant="ghost" size="sm">Returns</Button>
          </a>
        </div>
      </div>
    </nav>
  );
}