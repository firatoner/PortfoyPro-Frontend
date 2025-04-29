"use client";

import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { supabase } from "@/lib/supabaseClient";

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  // createClient() zaten statik, ekstra state gerekmez
  return (
    <SessionContextProvider supabaseClient={supabase}>
      {children}
    </SessionContextProvider>
  );
}
