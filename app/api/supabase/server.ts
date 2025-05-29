// app/api/supabase/server.ts
import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

export function createClient() {
  // cookies()’ı sync kullanmayıp, direkt createServerActionClient’a veriyoruz
  return createServerActionClient({
    cookies,              // burada fonksiyonu değil, objeyi veriyoruz
  });
}
