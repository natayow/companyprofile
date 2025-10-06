"use client";
import { useEffect } from "react";
import { initAuthListener } from "../lib/supabase/authListener";
import { init } from "next/dist/compiled/webpack/webpack";

export default function SupabaseAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initAuthListener();
  }, []);

  return <>{children}</>;
}
