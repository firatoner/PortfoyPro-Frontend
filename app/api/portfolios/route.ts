import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // create işlemi için service key gerekir
);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, userId } = body;

  if (!name || !userId) {
    return NextResponse.json({ error: "Eksik bilgi" }, { status: 400 });
  }

  const { data, error } = await supabase.from("portfolios").insert([
    {
      name,
      user_id: userId,
    },
  ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 200 });
}
