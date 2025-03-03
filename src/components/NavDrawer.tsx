"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NavDrawer() {
  return (
    <Drawer>
      <DrawerTrigger className="py-2 px-4 bg-zinc-800 min-w-screen flex justify-end">
        <span className="p-2 flex space-x-3">
        <Menu className="size-6 text-white" />
        <p className="text-center text-white text-md">More...</p>
        </span>
      </DrawerTrigger>
      <DrawerContent className="z-[100]">
        <div className="mx-auto w-full max-w-sm p-4">
          <DrawerHeader>
            <DrawerTitle className="p-4 text-center text-sm text-zinc-300">Navigation Menu</DrawerTitle>
          </DrawerHeader>
          <nav className="flex flex-col space-y-8 text-center font-extrabold">
            <a href="/" className="text-2xl font-bold hover:underline">
              Home
            </a>
            <a href="/about" className="text-2xl font-bold hover:underline">
              About
            </a>
            <a href="/contact" className="text-2xl font-bold hover:underline">
              Contact
            </a>
            <a href="/race-info" className="text-2xl font-bold hover:underline">
              Race Info
            </a>
            <a href="/events" className="text-2xl font-bold hover:underline">
              Events
            </a>
            <DrawerClose>
                <Button variant="outline">Close</Button>
            </DrawerClose>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
