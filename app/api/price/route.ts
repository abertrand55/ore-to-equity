import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get("symbol") || "TSLA"; // Default if none provided

  try {
    const res = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1d&range=5d`
    );

    if (!res.ok) throw new Error("Failed to fetch data from Yahoo Finance");
    const data = await res.json();

    const result = data?.chart?.result?.[0];
    const price = result?.meta?.regularMarketPrice;
    const currency = result?.meta?.currency || "USD";

    return NextResponse.json({ symbol, price, currency });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Error fetching Yahoo Finance data" },
      { status: 500 }
    );
  }
}
