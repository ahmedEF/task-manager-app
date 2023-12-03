import { Button } from "@/components/ui/button";
import Header from "../header";
import Logo from "../../../public/assets/icons/soon.svg"
import Image from 'next/image';
import Link from "next/link";
import {  Soon } from "@/shared/AppConst";

export default function ComingSoon() {
  return (
    <main className="hidden h-full bg-zinc-50 border rounded-xl flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <Header SubTitle={Soon.Description} Title={Soon.Title} />
      </div>
      <div className="flex items-center justify-center ">
      <Image
        src={Logo}
        alt="Welcome"
        width={600}
        height={600}
      />
      
      </div>
    </main>
  );
}   
