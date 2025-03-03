"use client";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { House } from "lucide-react";
import NavDrawer from "./NavDrawer";

export default function Navbar() {
  return (
    <div id="indorace-header" className="z-[99999] bg-zinc-100">
      <div
        id="indorace-branding-bar"
        className="grid grid-cols-1 md:grid-cols-2 md:w-auto"
      >
        <div className="md:justify-self-start justify-self-center md:p-8">
          <a href="/" rel="noopener noreferrer">
            <img
              src="/brandKit/indorace-logo.svg"
              alt="Indorace Logo."
              className="md:w-64 md:h-32 w-32 h-16 disable-img-rightclick"
            />
          </a>
        </div>
        <div className="md:justify-self-end justify-self-center md:pt-16 md:px-8 md:text-4xl font-light my-4 md:my-0 italic font-stretch-ultra-condensed">
          PROFESSIONAL RACE MANAGEMENT
        </div>
        {/* JPG and Tagline */}
      </div>
      <div id="indorace-navbar" className="z-[5000]">
        <div className="flex md:hidden">
        <NavDrawer />
        </div>
        <NavigationMenu className="hidden md:flex md:items-end items-center justify-center md:justify-end p-6 bg-zinc-800 dark:bg-zinc-800 text-white min-w-screen">
          <NavigationMenuList className="space-x-3 md:space-x-6">
            <NavigationMenuItem className="hover:text-red-400 font-bold">
              <a href="/" rel="noopener noreferrer">
                <span className="flex items-center gap-x-3">
                <House size={20} strokeWidth={2} />
                Home</span>
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-red-400 font-bold md:mx-5">
              <a href="/about" rel="noopener noreferrer">
                About Us
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-red-400 font-bold md:mx-5">
              <a href="/contact" rel="noopener noreferrer">
                Contact
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-red-400 font-bold md:mx-5">
              <a href="/race-info" rel="noopener noreferrer">
                Race Info
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-red-400 font-bold md:mx-5">
              <a href="/events" rel="noopener noreferrer">
                Events
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
