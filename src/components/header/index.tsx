"use client";

import { Button } from "@/components/ui/button";
import { Props } from "@/shared/AppConst";

// 
export default function Header({Title,Description}:Props) {
  return (
    <>
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{Title}</h2>
        <p className="text-muted-foreground mt-4">
          {Description}
        </p>
      </div>
    </>
  );
}
