import { NextRequest, NextResponse } from "next/server";
import { createClient } from "../supabase/server";
export async function POST(req: NextRequest) {
  const supabase = createClient();
  const body = await req.json();
  console.log("📤 Transaction payload:", body);
  const {
    assetId,
    type,
    amount,
    unitPrice,
    currency,
    exchangeRate,
    totalPrice,
    totalPriceTry,
    transactionDate,
    note,
    platform,
    fee,
    isManual,
  } = body;
  const { error } = await supabase
    .from("transactions")
    .insert([
      {
        assetId,
        type,
        amount,
        unitPrice,
        currency,
        exchangeRate,
        totalPrice,
        totalPriceTry,
        transactionDate,
        note,
        platform,
        fee,
        isManual,
      },
    ]);
  if (error) {
    console.error("❌ Supabase insert error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true }, { status: 200 });
}