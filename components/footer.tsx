import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function Footer() {
  return(
    <>
      <footer>
        <div className="container mx-auto py-10 md:py-14 px-4">
          <p className="text-center text-sm md:text-left">Build by {""} 
            <Link href={siteConfig.links.x} className="underline underline-offset-4 font-medium">Ryuta</Link>
            Hosted By<Link href={'https://vercel.com/'} className="underline underline-offset-4 font-medium">Vercel</Link>
          </p>
        </div>
      </footer>
    </>
  )
}