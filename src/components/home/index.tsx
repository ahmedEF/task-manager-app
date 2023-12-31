import { Button } from "@/components/ui/button";
import Header from "../header";
import Logo from "../../../public/assets/icons/icontask.svg"
import Image from 'next/image';
import Link from "next/link";
import { HomeTitles, PopUpTitles } from "@/shared/AppConst";

export default function WelcomePage() {
  return (
    <main className="hidden h-full bg-zinc-50 border rounded-xl flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <Header SubTitle={HomeTitles.SubTitle} Title={HomeTitles.Title}  />
      </div>
      <div className="flex items-center justify-center ">
      <Image
        src={Logo}
        alt="Welcome"
        width={600}
        height={600}
      />
      
      </div>
      <div className="grid justify-items-center">
      <p className="text-2xl font-bold tracking-tight text-gray-700">
      {HomeTitles.Description}
        </p>
        <Link href= {"/dashboard/tasksView"} className="mt-6">
        <Button className="border border-black border-solid font-family-inherit px-3 py-2 text-white bg-black hover:bg-white hover:text-black transition duration-300 ease-in-out --tw-border-opacity-1">
        Start achieving more today! 
        </Button>
        </Link>
        </div>
    </main>
  );
}
