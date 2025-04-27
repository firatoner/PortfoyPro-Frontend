"use client";

import type * as React from "react";
import { BookOpen, Bot, Settings2, SquareTerminal } from "lucide-react";

import { NavMain } from "./nav-main";

import { NavUser } from "./nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Playground",
      url: "/dashboard/playground",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "/dashboard/playground/history",
        },
        {
          title: "Starred",
          url: "/dashboard/playground/starred",
        },
        {
          title: "Settings",
          url: "/dashboard/playground/settings",
        },
      ],
    },
    {
      title: "Models",
      url: "/dashboard/models",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "/dashboard/models/genesis",
        },
        {
          title: "Explorer",
          url: "/dashboard/models/explorer",
        },
        {
          title: "Quantum",
          url: "/dashboard/models/quantum",
        },
      ],
    },
    {
      title: "Documentation",
      url: "/dashboard/documentation",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "/dashboard/documentation/introduction",
        },
        {
          title: "Get Started",
          url: "/dashboard/documentation/get-started",
        },
        {
          title: "Tutorials",
          url: "/dashboard/documentation/tutorials",
        },
        {
          title: "Changelog",
          url: "/dashboard/documentation/changelog",
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/dashboard/settings/general",
        },
        {
          title: "Team",
          url: "/dashboard/settings/team",
        },
        {
          title: "Billing",
          url: "/dashboard/settings/billing",
        },
        {
          title: "Limits",
          url: "/dashboard/settings/limits",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
