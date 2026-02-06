"use client";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      size="icon-lg"
      variant="secondary"
      className={cn(
        "fixed bottom-8 right-8 z-50 rounded-full shadow-xl border border-border bg-background/90 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300",
        visible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <ArrowUp className="mx-auto" size={28} strokeWidth={2.5} />
    </Button>
  );
}
