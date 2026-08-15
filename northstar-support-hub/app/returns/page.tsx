"use client";

import { useState } from "react";
import returnsData from "@/data/returns.json";

export default function ReturnsPage() { 
    const [orderId, setOrderId] = useState("");
    const [result, setResult] = useState<any>(null);
    const [selectedReason, setSelectedReason] = useState("");
    const [submitted, setSubmitted] = useState(false);
    return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Returns &amp; Refunds</h1>
      <div className="mt-6 w-full max-w-md">
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
  }}
>
  Check Return
</button>
{orderId && !result && (
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

    <h3 className="mt-4 font-medium">Return reasons:</h3>

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
  className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white"
  disabled={!selectedReason}
  onClick={() => setSubmitted(true)}
>
  Continue
</button>
{submitted && (
  <div className="mt-4 rounded-md border p-4">
    <p className="font-medium">
      Return request started for {result.item}.
    </p>

    <p className="mt-2">
      Reason: {selectedReason}
    </p>

    <p className="mt-2">
      Please follow the return instructions provided by the support team.
    </p>
  </div>
)}
    <p className="mt-4">
  <span className="font-medium">Refund guidance:</span>{" "}
  {result.refundGuidance}
</p>
  </div>
)}
</div>
    </main>
  );
}