"use client";

import { useState } from "react";
import returnsData from "@/data/returns.json";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function ReturnsPage() { 
    const [orderId, setOrderId] = useState("");
    const [result, setResult] = useState<any>(null);
    const [selectedReason, setSelectedReason] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [searched, setSearched] = useState(false);
    const [returnId, setReturnId] = useState("");
    return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Returns &amp; Refunds</h1>
      <div className="mt-6 w-full max-w-md">
  <p className="mb-2 text-sm font-medium text-muted-foreground">
  Step 1 of 2 &middot; Find your order
  </p>
  <label htmlFor="orderId" className="block mb-2 font-medium">
    Enter your order number
  </label>

  <input
    id="orderId"
    type="text"
    value={orderId}
    onChange={(event) => setOrderId(event.target.value)}
    placeholder="e.g. NS1001"
    className="w-full rounded-md border px-3 py-2"
  />
  <button
  type="button"
  className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white"
  onClick={() => {
    const found = returnsData.find(
      (item) => item.orderId.toUpperCase() === orderId.trim().toUpperCase()
    );

    setResult(found || null);
    setSelectedReason("");
    setSubmitted(false);
    setSearched(true);
    setReturnId("");
  }}
>
  Check Return
</button>
{searched && !result && (
  <p className="mt-6 text-red-600">
    We couldn't find that order. Please check the order number and try again.
  </p>
)}
{result && (
  <div className="mt-6 rounded-md border p-4">
    <h2 className="text-lg font-semibold">{result.item}</h2>

    <p className="mt-2">
      Return eligible: {result.returnEligible ? "Yes" : "No"}
    </p>
    {!result.returnEligible && (
    <Alert variant="destructive" className="mt-4">
      <AlertTitle>This order isn&apos;t eligible for return</AlertTitle>
      <AlertDescription>{result.refundGuidance}</AlertDescription>
    </Alert>
    )}

    

{result.returnEligible && !submitted && (
  <>
    <p className="mt-4 text-sm font-medium text-muted-foreground">
      Step 2 of 2 &middot; Tell us why
    </p>

    <h3 className="mt-1 font-medium">Return reasons:</h3>

    <div className="mt-2 space-y-2">
      {result.returnReasons.map((reason: string) => (
        <label key={reason} className="flex items-center gap-2">
          <input
            type="radio"
            name="returnReason"
            value={reason}
            checked={selectedReason === reason}
            onChange={(event) => setSelectedReason(event.target.value)}
          />
          <span>{reason}</span>
        </label>
      ))}
    </div>

    <button
      type="button"
      className="mt-4 rounded-md bg-green-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
      disabled={!selectedReason}
      onClick={() => {
        setReturnId(`RET-${result.orderId}-${Date.now().toString().slice(-6)}`);
        setSubmitted(true);
      }}
    >
      Continue
    </button>
  </>
)}

{submitted && (
  <div className="mt-4 rounded-md border p-4">
    <p className="font-medium">
      Return request started for {result.item}.
    </p>

    <p className="mt-2">
      Return ID: {returnId}
    </p>

    <p className="mt-2">
      Reason: {selectedReason}
    </p>

    <p className="mt-2">
      Please follow the return instructions provided by the support team.
    </p>

    <button
      type="button"
      className="mt-4 rounded-md border border-blue-600 px-4 py-2 text-blue-600"
      onClick={() => {
        setOrderId("");
        setResult(null);
        setSelectedReason("");
        setSubmitted(false);
        setSearched(false);
        setReturnId("");
      }}
    >
      Start a new return
    </button>
  </div>
)}
    {result.returnEligible && (
  <p className="mt-4">
    <span className="font-medium">Refund guidance:</span>{" "}
    {result.refundGuidance}
  </p>
)}
  </div>
)}
</div>
    </main>
  );
}