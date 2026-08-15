"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import ordersData from "@/data/orders.json";

export default function OrderStatusPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if(!searchQuery.trim()) {
      setError("Please enter an order number");
      return;
    };

    const foundOrder = ordersData.find(
      (o) => o.orderId.toLowerCase() === searchQuery.trim().toLowerCase()
    );

    if(foundOrder) {
      setResult(foundOrder);
    } else {
      setError("Order not found. Please check your order number");
    };
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      {/* header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Track Your Order</h1>
        <p className="text-muted-foreground mt-2">
          Enter your order number below to check current status and estimated delivery.
        </p>
      </div>
      {/* Search */}
      <form onSubmit={handleSearch} className="flex gap-4">
        <Input
          type="text"
          placeholder="ORD-12345 or ORD-123456"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1"
        />

        <Button type="submit" className="bg-primary text-primary-foreground">
          Search Order
        </Button>
      </form>

      {error && (
          <div className="p-4 rounded-md bg-red-50 text-red-600 text-sm font-medium">
            {error}
          </div>
        )}

        {/* Result */}
        {result && (
          <Card className="bg-ice-blue border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-accent-blue-text text-xl">
                Order {result.orderId}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Customer: {result.customer}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-md shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <p className="font-semibold">{result.status}</p>
                </div>
                <div className="p-4 bg-white rounded-md shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                  <p className="font-semibold">{result.estimatedDelivery}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-blue-100">
                <p className="text-sm font-medium mb-2">Items in this order:</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  {result.items.map((item: string, idx:number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
    </div>
  );
};