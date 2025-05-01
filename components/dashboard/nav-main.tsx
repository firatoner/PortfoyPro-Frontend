"use client";

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
            <div className="flex items-center gap-2 m-6">
              {/* <LayoutDashboard size={18} /> */}
              <h6>DASHBOARD</h6>
              {/* <LayoutDashboard size={18} /> */}
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarGroupLabel>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild className="m-4 ">
            <a href="portfolios">
              <div className="flex items-center gap-2">
                <GrTransaction />
                <span>Portfolios</span>
              </div>
            </a>
          </SidebarMenuButton>
          <SidebarMenuButton asChild className="m-4 ">
            <a href="Buy-Sell">
              <div className="flex items-center gap-2">
                <AiOutlineTransaction className="size-5" />
                <span>Buy-Sell</span>
              </div>
            </a>
          </SidebarMenuButton>
          <SidebarMenuButton asChild className="m-4 ">
            <a href="transactions">
              <div className="flex items-center gap-2">
                <FaSellcast className="size-4" />
                <span>Transactions</span>
              </div>
            </a>
          </SidebarMenuButton>
          <SidebarMenuButton asChild className="m-4 ">
            <a href="/profile">
              <div className="flex items-center gap-2">
                <CgProfile className="size-4" />
                <span>Profile</span>
              </div>
            </a>
          </SidebarMenuButton>
          <SidebarMenuButton asChild className="m-4 ">
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
