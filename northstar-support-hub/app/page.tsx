import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Northstar Support Hub</h1>
          <p className="text-muted-foreground mt-2">
            Self-service support for your Northstar orders
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Order Status Card */}
          <Link href="/order-status">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle>📦 Order Status</CardTitle>
                <CardDescription>
                  Track your order and check delivery status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Check Order Status</Button>
              </CardContent>
            </Card>
          </Link>

          {/* Returns & Refunds Card */}
          <Link href="/returns">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle>🔄 Returns &amp; Refunds</CardTitle>
                <CardDescription>
                  Start a return or check refund eligibility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  Start Return
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  );
}