
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">
        Welcome to Northstar Support Hub
      </h1>
      <p className="text-lg text-muted-foreground max-w-md mb-10">
        
      </p>

      <div className="grid sm:grid-cols-2 gap-4 w-full max-w-xl">
        <Link href="/order-status">
          <Card className="bg-ice-blue border-none hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="text-accent-blue-text">Order Status</CardTitle>
              <CardDescription>Check where your order is right now.</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/returns">
          <Card className="bg-ice-blue border-none hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="text-accent-blue-text">Returns & Refunds</CardTitle>
              <CardDescription>Start a guided return in a few steps.</CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </div>
    </main>
  );
}