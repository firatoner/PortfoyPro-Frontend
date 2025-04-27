"use client";
import { MdOutlineDashboard } from "react-icons/md";
import { Settings2 } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { FaSellcast } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { AiOutlineTransaction } from "react-icons/ai";
export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        <SidebarMenuButton asChild>
          <a href="dashboard">
            <div className="flex items-center gap-2 mb-6">
              <MdOutlineDashboard />
              <span>DASHBOARD</span>
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <a href="portfolios">
              <div className="flex items-center gap-2">
                <GrTransaction />
                <span>Portfolios</span>
              </div>
            </a>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <a href="buy-sell">
              <div className="flex items-center gap-2">
                <AiOutlineTransaction />
                <span>Buy - Sell</span>
              </div>
            </a>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <a href="transactions">
              <div className="flex items-center gap-2">
                <FaSellcast />
                <span>Transactions</span>
              </div>
            </a>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <a href="/profile">
              <div className="flex items-center gap-2">
                <CgProfile className="size-4" />
                <span>Profile</span>
              </div>
            </a>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <a href="/settings">
              <div className="flex items-center gap-2">
                <Settings2 className="size-4" />
                <span>Settings</span>
              </div>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
