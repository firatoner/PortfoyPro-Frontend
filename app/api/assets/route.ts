// import { NextRequest, NextResponse } from "next/server";

// const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;
// export async function POST(req: NextRequest) {
//   const body = await req.json();

//   const res = await fetch(`${BASE}/assets`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });

//   const data = await res.json();
//   return NextResponse.json(data, { status: res.status });
// }

// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   const portfolioId = searchParams.get("portfolioId");

//   if (!portfolioId) {
//     return NextResponse.json(
//       { error: "portfolioId parametresi gerekli" },
//       { status: 400 }
//     );
//   }

//   const res = await fetch(`${BASE}/assets/portfolio/${portfolioId}`);
//   const data = await res.json();

//   return NextResponse.json(data, { status: res.status });
// }
