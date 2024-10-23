"use client"
import { NavItem } from "@/types";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import { useState } from "react";
interface MainNavProps {
  items: NavItem[]
  children?: React.ReactNode
}
export default function MainNav({items}: MainNavProps) {

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  return(
    <div className="flex items-center md:gap-10">
      <Link href={"/"} className="hidden md:flex items-center"><span className="font-bold hidden sm:inline-block">PostWriter</span></Link>
      <nav className="md:flex md:gap-6 hidden">
        {items.map((item, index) => (
          <Link key={index} href={item.href} className="text-lg sm:text-sm font-medium hover:text-foreground/80">{item.title}</Link>
        ))}
      </nav>
      <button className="md:hidden" onClick={() => setShowMobileMenu(prev => !prev)}>
        <span>メニュー</span>
      </button>
        {showMobileMenu && (
          <MobileNav items={items}/>
        )}
    </div>
  )
}