"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";




export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const [user, setUser] = useState<{
    name: string;
    email: string;
    avatar: string;
  }>({
    name: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    const loadUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data?.user) {
        setUser({
          name: data.user.email.split("@")[0], // email öncesi kısmı isim olarak kullandık
          email: data.user.email,
          avatar: "", // dilersen avatar için default değer
        });
      }
    };
    loadUser();
  }, []);
  
if (!user.email) return null; // veya loading indicator
  return (
    <Sidebar collapsible="icon" {...props}>
      
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
