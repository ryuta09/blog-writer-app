import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem] mx-auto">
          <Link href={'/'} className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm">Xをフォローする</Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl  md:text-6xl lg:text-7xl">BlogWriter</h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem] mt-3 px-4">このアプリケーションはNext.js15で作成されたアプリケーションです。ユーザーは自由に投稿をポストすることができます。</p>
          <div className="space-x-4">
            <Link href={'/login'} className={cn((buttonVariants({size: "lg"})))} target="_blank" rel="noreferrer">はじめる</Link>
            <Link href={'/'} className={cn((buttonVariants({size: "lg", variant: "outline"})))} target="_blank" rel="noreferrer">GitHub</Link>
          </div>
        </div>
      </section>
    </>
  );
}