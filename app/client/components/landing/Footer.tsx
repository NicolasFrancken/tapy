import { Button } from "@/app/client/components/ui/button";
import { Instagram } from "lucide-react";
import Link from "next/link";
import { Tiktok } from "./icons";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t py-8">
      <div className="absolute inset-x-0 bottom-0 -z-50 h-16 w-full bg-primary blur-[120px]" />
      <p>@Copyrigth {new Date().getFullYear()}</p>
      <div className="flex gap-4">
        <Button
          asChild
          variant="outline"
          size="icon"
          className="rounded-xl hover:bg-background/55"
          aria-label="Instagram"
        >
          <Link href="https://instagram.com/tapy.ai">
            <Instagram color="#0A0A0A" />
            <span className="sr-only">Instagram</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="icon"
          className="rounded-xl hover:bg-background/55"
          aria-label="Tiktok"
        >
          <Link href="https://www.tiktok.com/@tapy.ai">
            <Tiktok
              color="#0A0A0A"
            />
            <span className="sr-only">Tiktok</span>
          </Link>
        </Button>
      </div>
    </footer >
  );
};
