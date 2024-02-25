import { Button, buttonVariants } from "@/app/client/components/ui/button";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { Tiktok } from "./icons";
import { cn } from "../../libs/utils";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t py-8">
      <div className="absolute inset-x-0 bottom-0 -z-50 h-16 w-full bg-primary blur-[120px]" />
      <p className=" text-xs md:text-base">
        @Copyrigth {new Date().getFullYear()}
      </p>
      <div className="flex gap-4">
        <Link
          href="https://instagram.com/tapy.ai"
          className={cn(
            buttonVariants({ size: "icon", variant: "outline" }),
            "bg-transparent",
          )}
        >
          <Instagram color="#0A0A0A" />
          <span className="sr-only">Instagram</span>
        </Link>

        <Link
          href="https://www.tiktok.com/@tapy.ai"
          className={cn(
            buttonVariants({ size: "icon", variant: "outline" }),
            "bg-transparent",
          )}
        >
          <Tiktok color="#0A0A0A" />
          <span className="sr-only">Tiktok</span>
        </Link>
      </div>
    </footer>
  );
};

